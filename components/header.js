import Image from 'next/image';

import Navbar from '../components/navbar'

export default function Header() {
 
  return (
    <div className='nav'>
            <Image
                src="/header.bmp"
                width={0}
                height={0}
                alt="Swamp Paradise"
                className='header-image'
                loading='eager'
            ></Image>
            {/* <div className="flex whitespace-nowrap justify-end h-6 mt-6 bg-pink-t4t"> */}
            <div className="nav-bar">
                <div className='-mt-2'>
                    <Navbar></Navbar>
                </div>
            </div>
  </div>
  )
}