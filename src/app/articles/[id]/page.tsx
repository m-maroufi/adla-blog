import BackButton from "@/components/BackButton";
import { convertIsoToPersianDate } from "@/lib/dateUtils";
import { ArticleType } from "@/types/DataTypeApi";
import { getArticleById } from "@/utils/fetchPosts";
import Image from "next/image";
import { notFound } from "next/navigation";

export type props = {
  params: Promise<{ id: string }>;
};

export default async function Page(props: props) {
  const { id } = await props.params;
  console.log(id);

  const result = await getArticleById(parseInt(id));

  if (!result.isSuccess || !result.data) {
    notFound();
  }
  const article: ArticleType = result?.data!;

  return (
    <article dir="rtl" className="max-w-5xl mx-auto p-4 md:p-6 lg:p-10 mt-20">
      <div className="flex flex-col md:flex-row-reverse md:items-start md:space-x-reverse md:space-x-6">
        {/* تاریخ سمت راست برای راست‌چین */}
        <div className="md:block hidden w-fit text-sm text-gray-500">
          <span className="block">
            تاریخ انتشار:{" "}
            {convertIsoToPersianDate(article.createDateTime_InUtc.toString())}
          </span>
        </div>
        <div className="flex-1 space-y-6">
          {/* عنوان و خلاصه */}
          <header className=" border-b border-gray-200 pb-3">
            {/* دکمه بازگشت */}

            <h1 className="text-3xl font-bold text-textMain mb-2">
              {article.title}
            </h1>
            <p className="text-textSubtle text-lg">{article.summary}</p>
          </header>

          {/* تصویر و محتوا */}
          <div className="flex flex-col lg:flex-row-reverse gap-6">
            {/* تصویر پست */}
            <div className="flex-shrink-0 w-full lg:w-1/3">
              <Image
                src={
                  "https://cdn.adlara.ir/upload/adl-articles/262e1e3ea9984f83ac8fddbd11d2ffc9490056984.jpeg"
                }
                alt="thumbnail"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg object-cover w-full h-auto"
              />
            </div>

            {/* متن پست با استایل Markdown */}
            <div
              className="flex-1 text-gray-800 leading-relaxed prose prose-p:leading-8 prose-headings:font-bold prose-strong:text-gray-900 prose-ul:pl-4 prose-blockquote:border-r-4 prose-blockquote:pr-4 prose-blockquote:text-gray-600 prose-blockquote:border-gray-300 max-w-none prose-rtl"
              dangerouslySetInnerHTML={{ __html: article?.description ?? "" }}
            />
          </div>
          {/* تاریخ در موبایل */}
          <div className="md:hidden text-sm text-gray-500 mt-6">
            تاریخ انتشار:{" "}
            {convertIsoToPersianDate(article.createDateTime_InUtc.toString())}
          </div>
        </div>
      </div>
      <div className=" mt-5 ">
        <BackButton />
      </div>
    </article>
  );
}
