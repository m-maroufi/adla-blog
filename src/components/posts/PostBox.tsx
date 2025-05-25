import { convertIsoToPersianDate } from "@/lib/dateUtils";
import { ArticleType } from "@/types/DataTypeApi";
import { baseImgUrl } from "@/utils/helper";
import Link from "next/link";
import Image from "next/image";

const PostBox = ({ article }: { article: ArticleType }) => {
  return (
    <Link href={`articles/${article.id}`} className="block max-w-72 w-full">
      <div className="post-box flex flex-col gap-4 bg-white rounded-lg shadow-md p-4">
        <div className="post-image w-full h-48 bg-gray-200 rounded-lg relative overflow-hidden">
          <Image
            src={
              article.thumbnail
                ? `${baseImgUrl}${article.thumbnail}`
                : "/images/placeholder.png"
            }
            fill
            priority={true}
            alt={article.title}
            className="object-cover object-center rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h2 className="text-xl font-mikhak font-bold text-primaryDark">
          {article?.title}
        </h2>
        <p className="text-sm text-textMain line-clamp-1">{article?.summary}</p>
        <span className="text-xs text-gray-500">
          {convertIsoToPersianDate(article?.createDateTime_InUtc?.toString())}
        </span>
      </div>
    </Link>
  );
};

export default PostBox;
