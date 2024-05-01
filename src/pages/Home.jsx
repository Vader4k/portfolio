import { Link, useNavigate } from 'react-router-dom'
import { pages } from '../constants'
import { motion } from 'framer-motion'

const Home = () => {  

  const navigate = useNavigate()

  const handleClick = (path) => {
    navigate(path)
    window.location.reload()
  }

  return (
    <>
      <section
        className="min-h-screen w-full flex flex-col md:justify-end xl:flex-row xl:items-end py-32 xl:py-0 xl:justify-between gap-10 lg:gap-20 px-8 xl:px-20 bg-bg-50">
          <div className='max-h-[250px] overflow-hidden lg:mb-28 '>
            <motion.div
            initial={{y:'50vh'}}
            animate={{y:0}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5}}  
            className='flex flex-col gap-2 md:gap-3 lg:gap-4'>
            <h1 className='font-Montserrat uppercase text-[0.9rem] font-medium tracking-[2px] text-text-50'>ODUKWE DANIEL</h1>
            <p className='font-Montserrat text-[0.8rem]'>Frontend Web Developer / Gamer / Movie Lover</p>

            <p className='font-Montserrat text-[0.8rem]'>
              Currently working full-time as a junior web developer at
            </p>
            <Link to="https://tethral.com/" target='_blank' className='font-Montserrat text-[0.82rem] font-semibold underline hover:line-through transition-all'>
              <p>Tethral Technologies</p>
            </Link>
          </motion.div>
          </div>

        <motion.div
           initial={{ filter: 'blur(100px)' }}
           animate={{ filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: 'easeInOut' }} 
          className='flex flex-col leading-[4.5rem] sm:leading-[6rem] md:leading-[8rem] lg:leading-[10rem] mb-5 lg:px-10'>
          {pages.map((link) => (
              <motion.div
                key={link.id}
                whileHover={{x: '8px'}}
                onClick={() => handleClick(link.path)}
                className='text-[3.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[12vw] xl:text-[10rem] cursor-pointer h1 text-text-50 hover:italic'
                >
                  {link.text}
                </motion.div>
          ))}
        </motion.div>
    </section>
    </>
  )
}

export default Home