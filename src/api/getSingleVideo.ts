import { fetchData } from "./apiClient";

export async function getSingleVideo(documentId: string): Promise<any> {
    try {
        const response = await fetchData(`video-grids/${documentId}?populate=*`) as { data: any };
        return response.data;
    } catch (error) {
        console.error("Error fetching video:", error);
        return null;
    }
}