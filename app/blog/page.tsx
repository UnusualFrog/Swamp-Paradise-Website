import '../globals.css'; 
import Image from 'next/image';

export default function Home() {
   return (
    <div className='h-1000'>
        {/* <div className='flex h-full justify-center align-top'> */}
        <div className='flex h-full justify-center align-top'>
            <div className='bg-pink-t4t w-80 grow ml-20'>
                <div className='bg-pink-shadow-t4t h-full w-20 grow'></div>
            </div>
            <div className='bg-pink-t4t w-200 grow ml-40'>
                <div className='bg-pink-shadow-t4t w-20 h-full'></div>
            </div>
                
            {/* INVIS */}
            <div className='bg-blue h-20 w-70 shrink'>

            </div>
        </div>
    </div>
    );
}
