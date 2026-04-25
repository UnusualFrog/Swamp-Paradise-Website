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

const example_blog_data = {
    "1" : {
        main_content: "FUCKLorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus eduis convallis. Tempus eleo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.eed Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus eleo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti socioseeeeeeeeequ. Ad litora torquent per conubia nostra inceptose himeeeeeenaeos. eedee",
        date_posted: "02/02/2026",
        tags: ["#sad 😟", "#mind-blown 🤯", "#alien👽", "#kitty😾", "#kitty😾"]
    },
    "2": {
        main_content: "I FUCKING LOVE MY GIRLFRIEND",
        date_posted: "11/22/1996",
        tags: ["#kitty😾"]
    },
    "3": {
        main_content: "KITTY",
        date_posted: "11/22/1996",
        tags: ["#kitty😾", "#kitty😾", "#kitty😾", "#kitty😾", "#kitty😾", "#kitty😾", "#kitty😾", "#kitty😾", "#kitty😾"]
    }
}


export default function Home() {
   return (
    <div className='h-1000'>
        <div className='container-blog'>

            {/* BIO CONTENT (LEFT TOWER) */}
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
                <div className='tower-blog-shadow'></div>
                <div className='tower-blog-content-col'>
                    <div className='tower-blog-header'>
                        <p className={blog_header_text_style}>=== BLOG ===</p>
                    </div>
                    {/* BLOG POSTS BELOW */}

                    <div className='tower-blog-post-base'>
                        <div className='tower-blog-post-content'>
                            <p className={blog_post_body_style}>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                                faucibus ex sapien vitae pellentesque sem placerat. In id cursus 
                                mi pretium tellus eduis convallis. Tempus eleo eu aenean sed diam 
                                urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum 
                                egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.
                                Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora 
                                torquent per conubia nostra inceptos himenaeos.eed

                                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                                faucibus ex sapien vitae pellentesque sem placerat. In id cursus 
                                mi pretium tellus duis convallis. Tempus eleo eu aenean sed diam 
                                urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum 
                                egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.
                                Ut hendrerit semper vel class aptent taciti socioseeeeeeeeequ. Ad litora 
                                torquent per conubia nostra inceptose himeeeeeenaeos. eedeee
                            </p>
                        </div>
                        <div className='tower-blog-post-tags'>
                            <p className={blog_post_date_style}>10/10/2026</p>
                            <p className={blog_post_tag_style}>#sad 😟</p>
                            <p className={blog_post_tag_style}>#mind-blown 🤯</p>
                            <p className={blog_post_tag_style}>#alien👽</p>
                            <p className={blog_post_tag_style}>#kitty😾</p>
                            <p className={blog_post_tag_style}>#kitty😾</p>
                        </div>
                    </div>
                    
                    <BlogPost
                        blog_post_data={example_blog_data[1]}
                    ></BlogPost>







                </div>
            </div>
        </div>
    </div>
    );
}
