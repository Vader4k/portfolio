import { useNavigate } from 'react-router-dom'
import { projetcs } from '../constants'
import { motion } from 'framer-motion'

const Works = () => {

  const navigate = useNavigate()

  const handleClick = (path) => {
    navigate(path)
    window.location.reload()
  }

  return (
    <>
    <div className="w-full min-h-[100vh] bg-text-50 h-full text-bg-50 flex flex-col py-20 lg:py-0 lg:flex-row lg:items-end justify-evenly gap-20 px-10 lg:px-5">
      <div className='sticky bottom-20 max-h-[300px] overflow-hidden'>
        <motion.div
          initial={{y:'50vh'}}
          animate={{y:0}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5}}   
          className="font-Montserrat text-[0.8rem] leading-6 lg:max-w-[350px] flex flex-col gap-6">
          <h1 className="text-[1.1rem] font-medium">WORKS</h1>

          <p>This is a showcase of my best works over the years as a frontend web developer including some collaboration projects with my peers</p>

          <p>The world of digital design and development is constantly eveolving and so has my role for the last 2 years, i{"'"}m still learning and gaining new skills every day</p>
        </motion.div>
      </div>

      <div className="lg:my-[12%] leading-[3.3rem] sm:leading-[4rem] md:leading-[5rem] lg:leading-normal  flex flex-col gap-5">
        {projetcs.map((works) => (
          <motion.div
            initial={{ filter: 'blur(60px)', opacity: 0 }}
            animate={{ filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}  
            key={works.id} 
            className='relative'
            onClick={() => handleClick(works.path)}
            >
            <h1 className='h1 text-[2rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6vw] hover:italic transition-all cursor-pointer'>{works.text}</h1>
            <p className='absolute hidden md:block -bottom-10 lg:bottom-1 uppercase text-[1rem]'>- web development</p>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Works