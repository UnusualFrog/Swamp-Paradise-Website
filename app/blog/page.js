import { promises as fs } from 'fs';
import '../globals.css'; 
import Image from 'next/image';
import localFont from 'next/font/local'
import BlogPost from '../../components/blog_post'


// Import Local Font
const myFont = localFont({
  src: '../../font/cmu.typewriter-text-regular.ttf',
})

// Combine global.css style with local font import
const pronoun_btn_style = 'pronoun-button ' + myFont.className
const bio_text_style = 'tower-bio-content-text ' + myFont.className
const blog_header_text_style = 'tower-blog-header-text ' + myFont.className
const blog_post_body_style = 'tower-blog-post-text ' + myFont.className
const blog_post_date_style = 'tower-blog-date-text ' + myFont.className
const blog_post_tag_style = 'tower-blog-tags-text ' + myFont.className

export default async function Home() {
    // Load blog post data from json
    const file = await fs.readFile(process.cwd() + '/data/blog_posts.json', 'utf8');
    const data = JSON.parse(file);
    const blog_post_data = [];

    // Convert from object of objects to array of objects to allow for .map() usage )
    for (let [key, value] of Object.entries(data)) {
        blog_post_data.push(value)
    }

    // Reverse post order to maintain chronology
    blog_post_data.reverse()

   return (
    <div className='h-1000'>
        <div className='container-blog'>

            {/* BIO CONTENT (LEFT TOWER) */}
            <div className='tower-bio' >
                {/* Tower Shadow */}
                <div className='tower-bio-shadow'></div>
                {/* Bio Content */}
                <div className='tower-bio-content-base'>
                    {/* Profile Picture */}
                    <Image
                        src="/pfp.png"
                        width={200}
                        height={200}
                        alt="Picture of the author"
                        className="pfp" 
                    ></Image>

                    {/* Name & Pronoun Labels */}
                    <button disabled={true} className={pronoun_btn_style}>✏️ - Julia</button>
                    <button disabled={true} className={pronoun_btn_style}>♀️ - She/Her</button>
                    <button disabled={true} className={pronoun_btn_style}>🖥️ - Unusual Frog</button>
                    
                    {/* Bio Description */}
                    <div className='tower-bio-content-value'>
                        <p className={bio_text_style}>
                            Hi! My name is Julia, welcome to my blog. Here you can expect to find
                            my thoughts on birds, frogs and other critters, alongside media reviews,
                            and the occasional ramblings of a mad-woman.
                        </p>
                    </div>

                </div>
            </div>

            {/* BLOG CONTENT (RIGHT TOWER) */}
            <div className='tower-blog'>
                {/* TOWER SHADOW */}
                <div className='tower-blog-shadow'></div>

                <div className='tower-blog-content-col'>
                    {/* TOWER HEADER */}
                    <div className='tower-blog-header'>
                        <p className={blog_header_text_style}>=== BLOG ===</p>
                    </div>

                    {/* BLOG POSTS BELOW */}
                    {
                        blog_post_data.map((obj, i) => (
                            <BlogPost key={i} blog_post_data={obj}></BlogPost>
                        ))
                    }




                </div>
            </div>
        </div>
    </div>
    );
}
