import { useBarcodeStore } from '@/hooks/useBarcodeStore';
import { Ionicons } from '@expo/vector-icons';
import { CameraType, Camera, type BarCodeScanningResult, FlashMode, AutoFocus } from 'expo-camera';
import { useCameraPermissions } from 'expo-camera/next';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Gesture, GestureDetector, TapGestureHandler } from 'react-native-gesture-handler';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAutofocus } from '@/hooks/useAutofocus';

export default function CameraModalScreen() {
  const [facing, setFacing] = useState(CameraType.back);
  const [flashMode, setFlashMode] = useState<FlashMode>(FlashMode.off);
  const { setBarcode } = useBarcodeStore();
  const [permission, requestPermission] = useCameraPermissions();
  const { isRefreshing, focusSquare, onTap } = useAutofocus(650);

  if (!permission || !permission.granted) {
    return (
      <View style={styles.container}>
        <Text>This app currently has no permission</Text>
        <Button title="Request permission" onPress={requestPermission} />
      </View>
    );
  }

  const onBarCodeScanned = (barcodeData: BarCodeScanningResult): void => {
    setBarcode(barcodeData.data);
    router.back();
  };

  const toggleCameraFacing = () => {
    setFacing((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
  };

  const toggleFlashlight = () => {
    setFlashMode((current) => (current === FlashMode.torch ? FlashMode.off : FlashMode.torch));
  };

  const tap = Gesture.Tap().onBegin(onTap);
  return (
    <GestureDetector gesture={tap}>
      <View style={styles.container}>
        <Camera
          style={styles.camera}
          type={facing}
          autoFocus={isRefreshing ? AutoFocus.off : AutoFocus.on}
          onBarCodeScanned={onBarCodeScanned}
          flashMode={flashMode}
        >
          <View style={styles.buttonContainer}>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity style={styles.button} onPress={toggleFlashlight}>
                {flashMode === FlashMode.torch ? (
                  <Ionicons name="flashlight" size={48} color="white" />
                ) : (
                  <Ionicons name="flashlight-outline" size={48} color="white" />
                )}
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                <Ionicons name="camera-reverse-sharp" size={48} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </Camera>
        {focusSquare.visible && (
          <View
            style={[styles.focusSquare, { top: focusSquare.y - 25, left: focusSquare.x - 25 }]}
          />
        )}
      </View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  buttonContainer: {
    flex: 1,
    marginBottom: 64,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  focusSquare: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: 'white',
  },
});
