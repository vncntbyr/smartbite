import React from 'react';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { MeatIcon } from '@/constants/icons/MeatIcon';
import { NonVeganIcon } from '@/constants/icons/NonVeganIcon';
import { VeganIcon } from '@/constants/icons/VeganIcon';
import { VegetarianIcon } from '@/constants/icons/VegetarianIcon';

export const icons = {
  user: <FontAwesome name="user" size={32} color="black" />,
  data: <MaterialIcons name="data-usage" size={32} color="black" />,
  analytics: <MaterialIcons name="analytics" size={32} color="black" />,
  contact: <MaterialIcons name="connect-without-contact" size={32} color="black" />,
  coffee: <FontAwesome name="coffee" size={32} color="black" />,
  terms: <MaterialIcons name="description" size={32} color="black" />,
  privacy: <MaterialIcons name="privacy-tip" size={32} color="black" />,
  meatIcon: <MeatIcon width={32} height={32} />,
  vegetarianIcon: <VegetarianIcon width={32} height={32} />,
  veganIcon: <VeganIcon width={32} height={32} />,
  nonVeganIcon: <NonVeganIcon width={32} height={32} />,
};
