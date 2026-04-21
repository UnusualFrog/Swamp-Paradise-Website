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
                    <button disabled={true} className='pronoun-button'>✏️ - Julia</button>
                    <button disabled={true} className='pronoun-button'>♀️ - She/Her</button>
                    <button disabled={true} className='pronoun-button'>🖥️ - Unusual Frog</button>
                    <div className='tower-bio-content-value'>
                        <p className='tower-bio-content-text'>
                            Hi! My name is Julia, welcome to my blog. Here you can expect to find
                            my thoughts on birds, frogs and other critters, alongside media reviews,
                            and the occasional ramblings of a mad-woman.
                        </p>
                    </div>
                </div>
            </div>
            <div className='tower-post'>
                <div className='tower-blog-shadow'></div>
                <div>edeedeeeeeeefeeeeeeeee</div>
            </div>
        </div>
    </div>
    );
}
