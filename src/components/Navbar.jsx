import { NavLinks } from '../constants'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const isHomePage = window.location.pathname === '/'

  return (
    <nav className='w-full flex items-center justify-between px-8 py-4 bg-transparent'>
        <span>@/2024</span>
        <div>
            <span>
                { isHomePage ? (
                    <span>
                        {NavLinks.map((item) => (
                            <NavLink to={item.path} key={item.id}>
                                {item.text}
                            </NavLink>
                        ))}
                    </span>
                ) : (
                    <span>Home</span>
                )}
            </span>
        </div>
    </nav>
  )
}

export default Navbar