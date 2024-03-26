import { useContext } from 'react';
import { JobsContext } from '../helpers/JobsDataContext';

export function useJobsData() {
  const context = useContext(JobsContext);
  if (context === undefined) {
    throw new Error(`useCountryData doesn't used right`);
  }
  return context;
}
