import Routing from '../routes/Routing'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation();

  const containerVariants = {
    home: { y: 0, transition: {duration: 0.8, ease: "easeOut"}},
    other: { y: 0, transition: {duration: 0.8, ease: "easeOut"}},
    exit: { y: location.pathname === '/' || location.pathname.startsWith('/project/') ? "100vh" : "-100vh", transition: {duration: 0.8, ease: "easeOut"}}
  }

  return (
    <section className='md:flex w-full'>
      <motion.div
       className={`h-screen w-screen fixed bg-text-50 z-40`}
       variants={containerVariants}
       initial={location.pathname === '/' || location.pathname.startsWith('/project/')  ? "home" : "other"}
       animate="exit" 
      />
        <Navbar />
        <main className='w-full'>
          <Routing />
        </main>
    </section>
  )
}

export default Layout