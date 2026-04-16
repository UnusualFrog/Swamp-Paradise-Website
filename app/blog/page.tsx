import '../globals.css'; 
import Image from 'next/image';

export default function Home() {
   return (
        <div className='flex justify-center align-top'>
            <div className='bg-red-500 h-auto w-50 ml-10'></div>
            <div className='bg-blue-500 h-20 w-30 grow ml-10'></div>
            <div className='bg-blue h-20 w-20'></div>
        </div>
    );
}
