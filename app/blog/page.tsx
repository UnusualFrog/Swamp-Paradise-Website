import '../globals.css'; 
import Image from 'next/image';
import localFont from 'next/font/local'

// Import Local Font
const myFont = localFont({
  src: '../../font/cmu.typewriter-text-regular.ttf',
})

// Combine global.css style with local font import
const pronoun_btn_style = 'pronoun-button ' + myFont.className
const text_style = 'tower-bio-content-text ' + myFont.className

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
                    <button disabled={true} className={pronoun_btn_style}>✏️ - Julia</button>
                    <button disabled={true} className={pronoun_btn_style}>♀️ - She/Her</button>
                    <button disabled={true} className={pronoun_btn_style}>🖥️ - Unusual Frog</button>
                    <div className='tower-bio-content-value'>
                        <p className={text_style}>
                            Hi! My name is Julia, welcome to my blog. Here you can expect to find
                            my thoughts on birds, frogs and other critters, alongside media reviews,
                            and the occasional ramblings of a mad-woman.
                        </p>
                    </div>
                </div>
            </div>
            <div className='tower-post'>
                <div className='tower-blog-shadow'></div>
                <div>edeedeeeeeeefeeeeeeeeeeee</div>
            </div>
        </div>
    </div>
    );
}
