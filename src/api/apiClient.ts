const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchData<T>(endpoint: string, language: string, options?: RequestInit): Promise<T> {

  const separator = endpoint.includes('?') ? '&' : '?';
  console.log(`Fetching data from: ${API_BASE_URL}${endpoint}${separator}locale=${language}`);
  const url = `${API_BASE_URL}${endpoint}${separator}locale=${language}`;
  
  const response = await fetch(url, options);
  
  if (!response.ok) throw new Error(`Error fetching ${endpoint}: ${response.status}`);
  return response.json();
}
