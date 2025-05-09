export interface WordPressPostType {
  id: number;
  date: string;
  slug: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  _links?: any; // اگر نیاز داری دقیق‌ترش هم می‌تونم بنویسم
}

export type WordPressHeadersType = {
  totalPages: string | null;
  totalPosts: string | null;
};
