import { Link } from 'react-router-dom'
import { pages } from '../constants'
import { motion } from 'framer-motion'

const Home = () => {  
  return (
    <section className="h-screen w-full flex items-end justify-between gap-20 px-28">
      <div className='mb-48 flex flex-col gap-4'>
        <h1 className='font-Montserrat uppercase text-[0.95rem] font-medium tracking-[2px] text-text-50'>ODUKWE DANIEL</h1>
        <p className='font-Montserrat text-[0.82rem]'>Frontend Web Developer / Gamer / Movie Lover</p>

        <p className='font-Montserrat text-[0.82rem]'>
          Currently working full-time as a junior web developer at
        </p>
        <a href="https://tethral.com/" className='font-Montserrat text-[0.82rem] font-semibold underline hover:line-through transition-all'>
          Tethral Technologies
        </a>
      </div>

      <div className='flex flex-col leading-[13rem]'>
        {pages.map((link) => (
          <Link to={link.path} key={link.id}>
            <motion.div
              whileHover={{ x: 20 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className='text-[11vw] h1 text-text-50 hover:italic transition-all'
              >
                {link.text}
              </motion.div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Home