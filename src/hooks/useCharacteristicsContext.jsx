import { useContext } from 'react';
import { CharacteristicsContext } from '../helpers/SelectedCharacteristicsContext';

export function useCharacteristicsContext() {
  const context = useContext(CharacteristicsContext);
  if (context === undefined) {
    throw new Error(`useCountryData doesn't used right`);
  }
  return context;
}
