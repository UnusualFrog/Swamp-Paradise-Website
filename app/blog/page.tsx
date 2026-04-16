import '../globals.css'; 
import Image from 'next/image';

export default function Home() {
   return (
    <div className='h-1000'>
        <div className='flex h-full justify-center align-top'>
            <div className='bg-pink-t4t w-80 grow ml-20'>
                <div className='main_tower_in'></div>
            </div>
            <div className='bg-pink-t4t w-210 grow ml-40'></div>
            <div className='bg-blue h-20 w-70 shrink'></div>
        </div>
    </div>
    );
}
