import { useNavigate } from 'react-router-dom'
import { projetcs } from '../constants'
import { motion } from 'framer-motion'
import CustomCursor from '../components/CustomCursor'
import { useState } from 'react'

const Works = () => {

  const navigate = useNavigate()

  const handleClick = (path) => {
    navigate(path)
    window.location.reload()
  }

  const [cursorVariant, setCursorVariant] = useState('default')
  
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <>
      <CustomCursor cursorVariant={cursorVariant}/>
    <div className="w-full bg-text-50 h-full text-bg-50 flex flex-col py-20 lg:py-0 lg:flex-row lg:items-end justify-evenly gap-10 px-10 lg:px-5">
      <div className="font-Montserrat text-[0.89rem] leading-6 lg:max-w-[450px] flex flex-col gap-6 sticky bottom-40">
        <h1 className="text-[1.1rem] font-medium">WORKS</h1>

        <p>This is a showcase of my best works over the years as a frontend web developer including some collaboration projects with my peers</p>

        <p>The world of digital design and development is constantly eveolving and so has my role for the last 2 years, i{"'"}m still learning and gaining new skills every day</p>
      </div>

      <div className="lg:my-[12%] leading-[3rem] sm:leading-[4rem] md:leading-[5rem] lg:leading-normal  flex flex-col gap-5 w-full">
        {projetcs.map((works) => (
          <motion.div 
            key={works.id} 
            className='relative'
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            onClick={() => handleClick(works.path)}
            transition={{ type: 'spring', stiffness: 100 }}
            >
            <h1 className='h1 text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[7vw] hover:italic transition-all cursor-pointer'>{works.text}</h1>
            <p className='absolute hidden md:block -bottom-10 lg:bottom-1 uppercase text-[1rem]'>- web development</p>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Works