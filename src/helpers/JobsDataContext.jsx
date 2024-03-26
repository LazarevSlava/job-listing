import { createContext, useState, useMemo, useCallback } from 'react';
import { baseUrl } from '../constants';

export const JobsContext = createContext();

export function JobsDataContext(props) {
  const [jobs, setJobs] = useState([]);

  const fetchDate = useCallback(() => {
    return fetch(`http://localhost:5173${baseUrl}/data.json`)
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
      })
      .catch(() => {
        const errorMessage = 'An error occurred while fetching the data. Please try again later.';
        alert(errorMessage);
      });
  }, []);

  const value = useMemo(() => {
    return { jobs, fetchDate };
  }, [jobs, fetchDate]);

  return <JobsContext.Provider value={value}>{props.children}</JobsContext.Provider>;
}
