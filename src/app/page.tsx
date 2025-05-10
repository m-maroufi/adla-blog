import Pagenation from "@/components/Pagenation";
import PostsContainer from "@/components/posts/PostsContainer";
import { fetchPosts } from "@/utils/fetchPosts";
type Params = Promise<{ slug: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>
 
export default async function  Home(props: {
  params: Params
  searchParams: SearchParams
}) {
  const {page,per_page} = await props?.searchParams;
   const parsedPage = parseInt(page as string) || 1;
   const parsedPerPage = parseInt(per_page as string) || 10;
  const posts = await fetchPosts(parsedPage, parsedPerPage);
  
  return <div className="mt-[100px]">
    <section className="page-title flex items-center justify-center min-h-[100px]">
      <div className="container">
        <h1 className="text-center text-primaryDark text-shadow-2xs text-shadow-primaryDark">آکادمی حقوق</h1>
      </div>
    </section>
    <section className="tabs container">
      <div className="tab-btns flex gap-4 items-center flex-wrap justify-center">
        <button className="border border-border rounded-md bg-mint hover:bg-primary cursor-pointer px-6 py-3 min-w-[200px] font-semibold  text-sm text-textMain font-vazirmtn hover:text-white md:text-lg shadow-md shadow-primary/40">
          مقاله (۱۲ مورد)
        </button>
        <button className="border border-border rounded-md bg-mint hover:bg-primary cursor-pointer px-6 py-3 min-w-[200px] font-semibold  text-sm text-textMain font-vazirmtn hover:text-white md:text-lg shadow-md shadow-primary/40">
          ویدئو ( 1 مورد)
        </button>
        <button className="border text-sm border-border rounded-md bg-mint hover:bg-primary cursor-pointer px-6 py-3 min-w-[200px] font-semibold text-textMain font-vazirmtn hover:text-white md:text-lg shadow-md shadow-primary/40">
          پادکست (0 مورد)
        </button>

      </div>
    </section>
    <section className="post-wrapper my-10 container">
      <PostsContainer posts={posts}/>
      <section className="pagenation">
        <Pagenation />
      </section>
    </section>
  </div>;
}
