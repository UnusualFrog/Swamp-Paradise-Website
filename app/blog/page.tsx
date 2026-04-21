import '../globals.css'; 
import Image from 'next/image';

export default function Home() {
   return (
    <div className='h-1000'>
        <div className='container-blog'>
            <div className='tower-bio' >
                <div className='tower-bio-shadow'></div>
                <div className='tower-bio-content-base'>
                    <Image
                        src="/pfp.png"
                        width={200}
                        height={200}
                        alt="Picture of the author"
                        className="pfp" 
                    ></Image>
                </div>
            </div>
            <div className='tower-post'>
                <div className='tower-blog-shadow'></div>
                <div>n</div>
            </div>
        </div>
    </div>
    );
}
