import { StyleSheet } from 'react-native';

import { NavigationGroup } from '@/components/about/NavigationGroup';
import { NavigationBar } from '@/components/about/NavigationBar';
import { useTranslation } from '@/hooks/useTranslation';
import { ContainerView } from '@/components/atoms/ContainerView';
import { icons } from '@/constants/icons';

// TODO: This is quite ugly at the moment. Maybe i can map over the aboutRoutes in routes.ts which have all the required data. (But then, how do I group them reusably?)
export default function AboutScreen() {
  const t = useTranslation();
  return (
    <ContainerView centerHorizontal centerVertical gap={16}>
      <NavigationBar icon={icons.analytics} link={'(about)/Analytics'}>
        {t('about.analytics')}
      </NavigationBar>
      <NavigationGroup>
        <NavigationBar icon={icons.terms} link={'(about)/Terms'}>
          {t('about.terms')}
        </NavigationBar>
        <NavigationBar icon={icons.privacy} link={'(about)/Privacy'}>
          {t('about.privacy')}
        </NavigationBar>
      </NavigationGroup>

      <NavigationGroup>
        {/* FIXME: This user icon somehow looks like its a few pixels off to the left. */}
        <NavigationBar icon={icons.user} link={'(about)/AboutMe'}>
          {t('about.aboutMe')}
        </NavigationBar>
        <NavigationBar icon={icons.contact} link={'(about)/Contact'}>
          {t('about.contact')}
        </NavigationBar>
        <NavigationBar icon={icons.coffee} link={'(about)/Donation'}>
          {t('about.coffee')}
        </NavigationBar>
      </NavigationGroup>
    </ContainerView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
