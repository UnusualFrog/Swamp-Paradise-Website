import Link from 'next/link'



export default function NavBar() {
  const navLocations =  [
        {"name":"Home", "href":"/"},
        {"name":"Blog", "href":"/blog"},
        {"name":"Gallery", "href":"/gallery"},
        {"name":"Games", "href":"/games"},
        {"name":"Projects", "href":"/projects"},
    ]
 
  return (
  <div className='min-h-full flex flex-row justify-center'>
        {
        navLocations.map(
            (item) => <button className='nav-button' key={item.name}>
                        <Link href={item.href} key={item.name}>{item.name}</Link>
                      </button>
                )
            }
  </div>
  )
}