import '../globals.css'; 
import Image from 'next/image';

export default function Home() {
   return (
    <div className='h-1000'>
        <div className='h-full grid-container'>

            <div className=' h-full ml-10'></div>
            <div className='bg-pink-t4t h-full col-start-2 col-end-2 w-100'></div>
            <div className=' h-full'></div>
            <div className='bg-pink-t4t h-full col-start-4 col-end-4 w-200 mx-20'></div>
            <div className='bg-transparent h-full col-start-5 col-end-5 w-20 mr-10'> </div>
        </div>
    </div>
    );
}
