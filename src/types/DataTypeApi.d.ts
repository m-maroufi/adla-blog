export interface ArticleTypes {
  id: number;
  name: string;
  friendlyURL?: string | null;
}
export interface ArticleType {
  id: number;
  title: string;
  summary?: string | null;
  description?: string | null;
  thumbnail: string;
  image?: string | null;
  audio?: null;
  video?: null;
  friendlyUrl?: string;
  createDateTime_InUtc: Date;
  count_Visited?: number;
  count_Like?: number;
  count_Comment?: number;
  selected_TypeIds?: string | null;
  types?: ArticleTypes[];
}

export interface FetchDataType {
  data: {
    totalCount?: number;
    pageNumber?: number;
    pageSize?: number;
    totalPages?: number;
    articles: ArticleType[] | null;
  };
  message: string;
  isSuccess: boolean;
}

export interface ErrorType {
  errors: string;
  isSuccess: boolean;
  Articles?: ArticleType[] | null;
}
