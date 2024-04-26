import { MeatIcon } from '@/constants/icons/MeatIcon';
import { NonVeganIcon } from '@/constants/icons/NonVeganIcon';
import { VeganIcon } from '@/constants/icons/VeganIcon';
import { VegetarianIcon } from '@/constants/icons/VegetarianIcon';
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';

export const icons = {
  user: <FontAwesome5 name="user-astronaut" size={24} color={'black'} />,
  meatIcon: <MeatIcon width={32} height={32} />,
  vegetarianIcon: <VegetarianIcon width={32} height={32} />,
  veganIcon: <VeganIcon width={32} height={32} />,
  nonVeganIcon: <NonVeganIcon width={32} height={32} />,
};
