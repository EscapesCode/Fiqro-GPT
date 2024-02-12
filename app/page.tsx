import Image from 'next/image'
import ChatComponents from '@/components/chatComponents'
// import CopyButton from '@/components/copyButton'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 '>
      <div className="bg-slate-800 p-3 lg:w-[800px] w-96 rounded-md text-white  ">
        <h2 className='text-2xl text-center font-bold'>FIQRO GAPTECH ~ BASE ON GPT-3.5-TURBO</h2>
        <div className='flex justify-center mt-5'>
          <Image className=''
            src="/logo.png"
            width={100}
            height={100}
            alt="Puck Yu"
          />
          
        </div>
           <ChatComponents/>
      <div className='text-center'><p className='mt-2 my-0'>

          Made With <span className='text-red-700'>❤</span> By Fiqro Najiah.
        </p></div>
      </div>
    </main>
  )
}

