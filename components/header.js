import Image from 'next/image';

import Navbar from '../components/navbar'

export default function Header() {
 
  return (
    <div>
        <div className='flex flex-row justify-end'>
            <Image
                src="/header.png"
                width={1920}
                height={1080}
                alt="Picture of the author"
            ></Image>
        </div>
    <div className='flex flex-row justify-end -mt-30'>
        <Navbar></Navbar>
    </div>
  </div>
  )
}