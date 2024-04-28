import Routing from '../routes/Routing'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

const Layout = () => {
  return (
    <section className='md:flex'>
      <motion.div
       className='h-screen w-screen fixed bg-text-50 z-40'
       animate={{y: '100vh'}}
       exit={{y: '100vh'}}
       transition={{duration: 1, ease: "easeInOut"}} 
      />
        <Navbar />
        <main className='w-full'>
          <Routing />
        </main>
    </section>
  )
}

export default Layout