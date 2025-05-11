const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchData<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
  if (!response.ok) throw new Error(`Error fetching ${endpoint}: ${response.status}`);
  return response.json();
}


