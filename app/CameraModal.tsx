import { useBearStore } from '@/hooks/useBarcodeStore';
import { CameraType, Camera, type BarCodeScanningResult } from 'expo-camera';
import { CameraView, useCameraPermissions } from 'expo-camera/next';
import { router } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CameraModalScreen() {
  const [facing, setFacing] = useState(CameraType.back);
  const { setBarcode } = useBearStore();
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return (
      <View style={styles.container}>
        <Text>No permission</Text>
        <Button title="Request permission" onPress={requestPermission} />
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text>No permission</Text>
        <Button title="Request permission" onPress={requestPermission} />
      </View>
    );
  }

  const onBarCodeScanned = (barcodeData: BarCodeScanningResult): void => {
    // TODO hoist barcode value up to index component - maybe use data store like zustand
    setBarcode(barcodeData.data);
    // TODO: close modal by navigating back
    router.back();
  };

  function toggleCameraFacing() {
    setFacing((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={facing} autoFocus onBarCodeScanned={onBarCodeScanned}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
