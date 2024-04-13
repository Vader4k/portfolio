import { NavLinks } from '../constants' // Assuming NavLinks contains route data
import { NavLink, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [activePath, setActivePath] = useState(window.location.pathname); // Store active path

  useEffect(() => {
    const handleLocationChange = () => setActivePath(window.location.pathname);
    window.addEventListener('popstate', handleLocationChange); // Listen for route changes

    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/')
    window.location.reload()
  };

  return (
    <nav className={`
      flex sticky top-0 h-screen pl- py-12 px-16 pt-20 max-w-[50px] flex-col justify-between font-Montserrat text-[0.7rem]
      ${activePath === '/' || activePath.includes('/project') ? 'bg-bg-50 text-black' : activePath === '/about' ? 'bg-bg-50 text-black' : 'bg-text-50 text-bg-50'}`}>
      <div className='flex flex-col gap-6 relative'>
        <span>
          {activePath === '/' ? (
            <span>
              {NavLinks.map((item) => (
                <NavLink to={item.path} key={item.id} target='_blank'>
                  <p className='transform -rotate-90 origin-bottom-left uppercase hover:line-through transition-all my-10 w-[100px]'>{item.text}</p>
                </NavLink>
              ))}
            </span>
          ) : (
            <button onClick={handleHome} className='transform -rotate-90 origin-bottom-left uppercase hover:line-through tracking-[0.4rem] my-20'>Home</button>
          )}
        </span>

        <div className={`${activePath === '/' || activePath === '/about' || activePath.includes('/project') ? 'top-[250px] border-black' : 'top-[200px]'} border-b  transform -rotate-90 absolute w-[100px]  left-[-58px]`}/>
      </div>
      <span className='transform -rotate-90 origin-bottom-left w-[100px]'>@ / 2024</span>
    </nav>
  );
};

export default Navbar;