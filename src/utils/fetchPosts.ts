"use server";
import { WordPressHeadersType, WordPressPostType } from "@/types/wordpress";

const API_URL = process.env.WP_URL;

 
export type FetchPostResultType = {
  data: WordPressPostType[] | null;
  headersData?: WordPressHeadersType;
  status?: number;
  error?:string[]|undefined;
};

export const fetchPosts = async (page: number,pre_page:number=10): Promise<FetchPostResultType | null> => {
    await new Promise((resolve) => setTimeout(resolve, 150));


 try{
    console.log("fetching posts"+`${API_URL}/posts?per_page=${pre_page}&page=${page}`);
    const response = await fetch(
      `${API_URL}/posts?per_page=${pre_page}&page=${page}`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: WordPressPostType[] = await response.json();
    console.log(response.headers);
    
    const headersData:WordPressHeadersType ={
        totalPages: response.headers.get('X-WP-TotalPages'),
        totalPosts: response.headers.get('X-WP-Total'),
    }
    return({
        data
        ,headersData,
        status: response.status,
        error: undefined
    })
  }

  catch (error) {
    return {
        data: null,
        headersData: undefined,
        status: undefined,
        error: [error instanceof Error ? error.message : 'Unknown error']
      };
  }
}