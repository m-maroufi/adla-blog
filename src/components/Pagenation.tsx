"use client";

import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const Pagenation = () => {
   const serchParams = useSearchParams()
   const router =useRouter()
    const page = parseInt(serchParams?.get('page') as string) || 1;
    const per_page = parseInt(serchParams?.get('per_page') as string) || 10;
    // console.log(page,per_page);
  return (
    <div className='mt-10'>
        <div className="flex items-center justify-center gap-4">
            <button  onClick={() => {router.push(`/?page=${1}&per_page=${per_page}`)}}>
              1
            </button>
            <button onClick={() => {router.push(`/?page=${2}&per_page=${per_page}`)}}>
                2
            </button>
        </div>
    </div>
  )
}

export default Pagenation