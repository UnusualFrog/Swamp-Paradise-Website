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
  <div>
        {
        navLocations.map(
            (item) => <Link href={item.href} key={item.name}>
                        <button className='nav-button' key={item.name}>{item.name}</button>
                      </Link>

                )
            }
  </div>
  )
}