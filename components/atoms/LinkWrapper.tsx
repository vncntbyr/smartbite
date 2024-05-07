import type { PropsWithChildren } from 'react';
import { Link, type LinkProps } from 'expo-router';
import { Pressable } from 'react-native';

type BarcodeLinkWrapperProps = PropsWithChildren<{
  link: any; // Ideally this is typed with StaticRoutes | RelativePathString, but somehow expo does not yet export this. Look for better way in future to ensure type safety.
  style?: LinkProps<typeof Link>['style'];
}>;

export function LinkWrapper({ children, link, style }: BarcodeLinkWrapperProps): JSX.Element {
  return (
    <Link href={link} style={style} asChild>
      <Pressable>{children}</Pressable>
    </Link>
  );
}
