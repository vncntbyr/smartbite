import Colors from '@/constants/Colors';
import type { HeaderIconProps } from '@/types/icons';
import { FontAwesome } from '@expo/vector-icons';
import { useColorScheme } from 'react-native';

export const TrashIcon = ({ pressed }: HeaderIconProps) => {
  const colorScheme = useColorScheme();
  return (
    <FontAwesome
      name="trash"
      size={25}
      color={Colors[colorScheme ?? 'light'].text}
      style={{ marginRight: 20, opacity: pressed ? 0.5 : 1 }}
    />
  );
};
