import React from 'react'
import PostBox from './PostBox'
import { FetchPostResultType } from '@/utils/fetchPosts'

const PostsContainer = ({posts}:{posts:FetchPostResultType | null}) => {
  return (
    <div className='grid gap-6 grid-cols-1 items-center justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <PostBox />
        <PostBox />
        <PostBox />
        <PostBox />
    </div>
  )
}

export default PostsContainer