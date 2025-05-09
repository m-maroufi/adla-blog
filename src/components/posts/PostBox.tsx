import Link from 'next/link'
import React from 'react'

const PostBox = () => {
  return (
    <Link href={""} className='block max-w-72 w-full'>
        <div className="post-box flex flex-col gap-4 bg-white rounded-lg shadow-md p-4">
            <div className="post-image w-full h-48 bg-gray-200 rounded-lg"></div>
            <h2 className="text-xl font-mikhak font-bold text-primaryDark">عنوان مقاله</h2>
            <p className="text-sm text-textMain line-clamp-2">توضیحات مختصر درباره مقاله...</p>
            <span className="text-xs text-gray-500">تاریخ انتشار: 1402/01/01</span>
        </div>
    
    
    </Link>
  )
}

export default PostBox