import type { PropsWithChildren } from 'react';
import { Link, type LinkProps } from 'expo-router';
import { Pressable } from 'react-native';

type BarcodeLinkWrapperProps = PropsWithChildren<{
  barcode: string;
  style?: LinkProps<typeof Link>['style'];
}>;

export function BarcodeLinkWrapper({
  children,
  barcode,
  style,
}: BarcodeLinkWrapperProps): JSX.Element {
  return (
    <Link href={`/barcode/${barcode}/`} style={style} asChild>
      <Pressable>{children}</Pressable>
    </Link>
  );
}
