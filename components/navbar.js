import Link from 'next/link'
import localFont from 'next/font/local'

// Import Local Font
const myFont = localFont({
  src: '../font/cmu.typewriter-text-regular.ttf',
})

// Combine global.css style with local font import
const nav_btn_style = 'blue-button ' + myFont.className

export default function NavBar() {
  const navLocations =  [
        {"name":"Home", "href":"/"},
        {"name":"Blog", "href":"/blog"},
        {"name":"Gallery", "href":"/gallery"},
        {"name":"Games", "href":"/games"},
        {"name":"Projects", "href":"/projects"},
    ]
 
  return (
  <div className=''>
        {
        navLocations.map(
            (item) => <Link className={nav_btn_style} href={item.href} key={item.name}>
                        <button key={item.name}>{item.name}</button>
                      </Link>

                )
            }
  </div>
  )
}