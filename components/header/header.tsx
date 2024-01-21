import About from '@/components/about/about'
import Button from '../button/page'
import Link from 'next/link'
export default function Header() {
    return (
           <main className="w-screen h-screen relative bg-[#172D13]">
        <div className='flex items-center w-full h-full bg-center'>
          <div className='pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]'>
            <h1 className='text-[50px] text-white font-semibold animate-typing'>
              Make anything possible with
              <span className='text-transparent bg-clip-text bg-gradient-to-r text-white'>
                {"  "}
                Web Development
              </span>
            </h1>
            <p className='text-gray-200 hidden md:block'>
              Hi I am Sara Murtaza.<br/>I am Web Developer
            </p>
            <div className='flex-col md:flex-row hidden md:flex gap-5'>
             <button className=" rounded-[20px] group relative bg-[#D76F30] hover:bg-[#6BB77B]  hover:border-white px-5 py-3 text-lg text-white max-w-[200px]]">
                Login/SignUp
              </button>
              <button className="cursor-pointer rounded-[20px] group relative bg-[#D76F30] hover:bg-[#6BB77B] px-5 py-3 text-lg text-white max-w-[200px]]">
                <div className='absolute rounded-[20px] z-[1] bg-white insert-0 opacity-0 group-hover:opacity-20'></div>
               About me
              </button>
              <button className="rounded-[20px] group relative bg-[#D76F30] hover:bg-[#6BB77B] px-5 py-3 text-lg text-white max-w-[200px]]">
                <div className='absolute rounded-[20px] z-[1] bg-white insert-0 opacity-0 group-hover:opacity-20'></div>
                Contact me
              </button>
            </div>
          </div>
        </div>
      </main>
    )
  }