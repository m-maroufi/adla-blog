"use client";
import { useEffect, useState } from "react";
import PostBox from "./PostBox";
import { ArticleType } from "@/types/DataTypeApi";
import SkeletonCard from "./SkeletonCard";
import SkeletonPostBox from "./SkeletonCard";

const PostsContainer = ({ posts }: { posts: ArticleType[] | null }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [localPosts, setLocalPosts] = useState<ArticleType[] | null>(null);
  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setLocalPosts(posts);
      setIsLoading(false);
    }, 2000); // یه تاخیر کوچیک برای طبیعی‌تر کردن لودینگ
    return () => clearTimeout(timeout);
  }, [posts]);

  return isLoading ? (
    <div className="grid gap-6 grid-cols-1 items-center justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {[...Array(4)].map((_, idx) => (
        <SkeletonPostBox key={idx} />
      ))}
    </div>
  ) : (
    <div className="grid gap-6 grid-cols-1 items-center justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {localPosts?.map((post: ArticleType) => (
        <PostBox key={post.id} article={post} />
      ))}
    </div>
  );
};

export default PostsContainer;
