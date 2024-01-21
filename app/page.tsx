import Contact from '@/components/contact/contact'
import About from '@/components/about/about'
import Image from 'next/image'
import Header from '@/components/header/header'

export default function Home() {
  return (
     <div>
      <Header/>
      <About/>
      <Contact/>
     </div>
    
  )
}