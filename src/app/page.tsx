'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import MainLayout from "./components/commom/layout/MainLayout";
import ContentContainer from "./components/commom/layout/ContentContainer";
export default function Home() {
  const router = useRouter()  
  useEffect(()=>{
  setTimeout(function() {
    router.push('pages/login')
}, 2000)
    
  })
return (

<div className='flex-1 items-center justify-center mb-2 w-full scroll-smooth md:scroll-auto '>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
<div className=" inline-block animate-bounce rounded-full p-4 text-white text-sm">
<Image  aria-hidden className="rounded-full"
        src="/logo.png"
        alt="File icon"
        width={500}
        height={500}
          />
</div>
</div>
</div>
</div>

)
}
