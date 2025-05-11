import { fetchData } from "./apiClient";

// interface VideoResponse {
//   data?: {
//     attributes?: {
//       videoUrl?: string;
//     };
//   };
// }

export async function getVideos(): Promise<any> {
    try {
        const response = await fetchData("video-grids?populate=*") as { data: any };
        return response.data;
    } catch (error) {
        console.error("Error fetching videos:", error);
        return null;
    }
}