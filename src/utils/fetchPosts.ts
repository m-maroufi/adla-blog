import { ArticleType, ErrorType, FetchDataType } from "@/types/DataTypeApi";

const BaseUrl = process.env.BASE_URL;

export async function getArticles(
  pageSize = 8,
  pageNumber = 1
): Promise<FetchDataType> {
  try {
    const response = await fetch(
      `${BaseUrl}/Landing/Articles?PageNumber=${pageNumber}&PageSize=${pageSize}`
    );
    if (!response.ok || response.status !== 200) {
      throw new Error("خطایی در دریافت اطلاعات پیش آمد.");
    }
    const result: FetchDataType = await response.json();
    return result;
  } catch (error) {
    let errorMessage = "خطایی رخ داد.";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return {
      data: {
        articles: null,
      },
      message: errorMessage,
      isSuccess: false,
    };
  }
}
export interface resultGetArticle {
  data: ArticleType | undefined;
  message: string | null;
  isSuccess: boolean;
}
export async function getArticleById(
  articleId: Number
): Promise<resultGetArticle> {
  try {
    const response = await fetch(`${BaseUrl}/Landing/Articles/${articleId}`);
    if (!response.ok || response.status !== 200) {
      throw new Error("خطایی در دریافت اطلاعات پیش آمد.");
    }
    const result: resultGetArticle = await response.json();
    if (!result.data) {
      return {
        data: undefined,
        message: "پست مورد نظر یافت نشد",
        isSuccess: false,
      };
    }
    return result;
  } catch (error) {
    let errorMessage = "خطایی رخ داد.";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return {
      data: null as any,
      message: errorMessage,
      isSuccess: false,
    };
  }
}
