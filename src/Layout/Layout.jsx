import Routing from '../routes/Routing'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation();

  const containerVariants = {
    home: { y: 0, transition: { duration: 0.8, ease: "easeOut" }},
    other: { y: 0, transition: { duration: 0.8, ease: "easeOut" }},
    exit: { 
      y: location.pathname === '/' || location.pathname.startsWith('/project/') ? "120vh" : "-120vh", 
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const isHomeOrProject = location.pathname === '/' || location.pathname.startsWith('/project/');

  return (
    <section className='w-full md:flex'>
      <motion.div
        className='fixed z-40 w-screen h-screen bg-text-50'
        variants={containerVariants}
        initial={isHomeOrProject ? "home" : "other"}
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