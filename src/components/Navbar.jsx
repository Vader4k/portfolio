import { NavLinks } from '../constants' // Assuming NavLinks contains route data
import { NavLink } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = (url) => {
    navigate(url)
  }

  return (
    <>
      <nav className={`
        md:flex hidden sticky top-0 h-screen py-12 px-14 pt-20 max-w-[50px] flex-col justify-between font-Montserrat text-[0.7rem]
        ${location.pathname === '/' || location.pathname.includes('/project') ? 'bg-bg-50 text-black' : location.pathname === '/about' ? 'bg-bg-50 text-black' : 'bg-text-50 text-bg-50'}`}>
        <div className='flex flex-col gap-6 relative'>
          <span className='w-full my-[-30px]'>
            {location.pathname === '/' ? (
              <span>
                {NavLinks.map((item) => (
                  <NavLink to={item.path} key={item.id} target='_blank'>
                    <p className='transform -rotate-90 origin-bottom-left uppercase hover:line-through transition-all w-[30px] my-10'>{item.text}</p>
                  </NavLink>
                ))}
              </span>
            ) : (
              <>
                {location.pathname.includes('/project') ? (
                  <button onClick={() => handleClick('/works')} className='transform -rotate-90 origin-bottom-left uppercase hover:line-through tracking-[0.2rem] my-20'>Work</button>
                ) : (
                  <button onClick={() => handleClick('/')} className='transform -rotate-90 origin-bottom-left uppercase hover:line-through tracking-[0.4rem] my-20 text-[0.65rem]'>Home</button>

                )}
              </>

            )}
          </span>

          <div className={`${location.pathname === '/' || location.pathname === '/about' || location.pathname.includes('/project') ? 'top-[250px] border-black' : 'top-[150px]'} border-b  transform -rotate-90 absolute w-[100px] left-[-58px]`}/>
        </div>
        <span className='transform -rotate-90 origin-bottom-left w-[100px] tracking-widest'>@ / 2024</span>
      </nav>

      <nav 
        className={`w-full flex items-center justify-between md:hidden font-Montserrat text-[0.7rem] p-5 ${location.pathname === '/' || location.pathname.includes('/project') ? 'bg-bg-50 text-black' : location.pathname === '/about' ? 'bg-bg-50 text-black' : 'bg-text-50 text-bg-50'}`}>
          <div className='flex items-center gap-0'>
            <span className='w-full my-[-30px]'>
              {location.pathname === '/' ? (
                <span className='flex gap-6'>
                  {NavLinks.map((item) => (
                    <NavLink to={item.path} key={item.id} target='_blank'>
                      <p className='uppercase hover:line-through transition-all'>{item.text}</p>
                    </NavLink>
                  ))}
                </span>
              ) : (
                <>
                  {location.pathname.includes('/project') ? (
                    <button onClick={() => handleClick('/works')} className='uppercase hover:line-through tracking-[0.2rem]'>Work</button>
                  ) : (
                    <button onClick={() => handleClick('/')} className=' uppercase hover:line-through tracking-[0.4rem] text-[0.65rem]'>Home</button>                  )}
                </>

              )}
            </span>
            <div className={`${location.pathname === '/' || location.pathname === '/about' || location.pathname.includes('/project') ? 'border-black' : ''} border-b w-[100px]`}/>
          </div>
          <span className='w-[100px] tracking-widest'>@ / 2024</span>
      </nav>
    </>
  );
};

export default Navbar;