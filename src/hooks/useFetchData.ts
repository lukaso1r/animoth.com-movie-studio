import { useLanguage } from '../context/LanguageContext';
import { fetchData } from '../api/apiClient';
import { useCallback } from 'react';

export function useFetchData<T>() {
  const { language } = useLanguage();

  const fetchDataWithLanguage = useCallback(
    (endpoint: string, options?: RequestInit): Promise<T> => {
      return fetchData<T>(endpoint, language, options);
    },
    [language]
  );

  return fetchDataWithLanguage;
}
