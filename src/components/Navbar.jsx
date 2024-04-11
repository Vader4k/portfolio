import { NavLinks } from '../constants'
import { NavLink, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';


const Navbar = () => {
    const [isHomePage, setIsHomePage] = useState(window.location.pathname === '/');

    useEffect(() => {
        setIsHomePage(window.location.pathname === '/');
    }, []);

    const navigate = useNavigate()

    const handleHome = () => {
        navigate('/')
        window.location.reload()
    }

  return (
    <nav className='flex sticky top-0 left-10 h-screen pl-6 py-10 text-[0.8rem] max-w-[50px] flex-col  justify-between'>
        <div className='flex flex-col gap-6 relative'>
            <span>
                { isHomePage ? (
                    <span>
                        {NavLinks.map((item) => (
                            <NavLink to={item.path} key={item.id} className="mx-6">
                                <p className='transform -rotate-90 origin-bottom-left uppercase'>{item.text}</p>
                            </NavLink>
                        ))}
                    </span>
                ) : (

                   <button onClick={handleHome} className='transform -rotate-90 origin-bottom-left uppercase'>Home</button>

                )}
            </span>

            <div className={`${isHomePage ? 'top-[200px]' : 'top-[100px]'} border-b border-black transform -rotate-90 absolute w-[100px]  left-[-58px]`}/>
        </div>
        <span className='transform -rotate-90 origin-bottom-left'>@/2024</span>
    </nav>

  )
}

export default Navbar