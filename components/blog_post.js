import localFont from 'next/font/local'


// Import Local Font
const myFont = localFont({
  src: '../font/cmu.typewriter-text-regular.ttf',
})

// Apply Global styles + local font
const blog_post_body_style = 'tower-blog-post-text ' + myFont.className
const blog_post_date_style = 'tower-blog-date-text ' + myFont.className
const blog_post_tag_style = 'tower-blog-tags-text ' + myFont.className

export default function BlogPost(blog_post_data) {
  let main_content = blog_post_data.blog_post_data.main_content
  let date = blog_post_data.blog_post_data.date_posted
  let tags = blog_post_data.blog_post_data.tags
  
  return (
    <div className='tower-blog-post-base'>

      {/* Main Text Content */}
      <div className='tower-blog-post-content'>
          <p className={blog_post_body_style}>
              {main_content}
          </p>
      </div>

      {/* Date & Tags */}
      <div className='tower-blog-post-tags'>
          <p className={blog_post_date_style}>{date}</p>
          {
            tags.map((tag, i) => (
              <p key={tag + i} className={blog_post_tag_style}>
                {tag}
              </p>
            ))
          }
      </div>

  </div>
  )
}