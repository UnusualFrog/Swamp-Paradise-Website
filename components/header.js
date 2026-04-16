import Image from 'next/image';

import Navbar from '../components/navbar'

export default function Header() {
 
  return (
    <div className='nav'>
            <Image
                src="/header_lg.bmp"
                width={0}
                height={0}
                alt="Picture of the author"
                className='header-image'
            ></Image>
            <div className="flex justify-end h-6 mt-10 bg-pink-t4t">
                <div className='-mt-2'>
                    <Navbar></Navbar>
                </div>
            </div>
  </div>
  )
}