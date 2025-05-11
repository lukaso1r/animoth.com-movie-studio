import { fetchData } from "./apiClient";

interface FaviconResponse {
  data?: {
    favicon?: { url: string };
  };
}

export async function getFaviconUrl(): Promise<string | null> {
  try {
    const response = await fetchData<FaviconResponse>("favicon?populate=favicon");
    return response.data?.favicon?.url ?? null;
  } catch (error) {
    console.error("Error fetching favicon:", error);
    return null;
  }
}
