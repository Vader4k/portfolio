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
    <div className="w-full bg-text-50 h-full text-bg-50 px flex items-end justify-evenly gap-10">
      <div className="font-Montserrat text-[0.89rem] leading-6 max-w-[450px] flex flex-col gap-6 sticky bottom-40">
        <h1 className="text-[1.1rem] font-medium">WORKS</h1>

        <p>This is a showcase of my best works over the years as a frontend web developer including some collaboration projects with my peers</p>

        <p>The world of digital design and development is constantly eveolving and so has my role for the last 2 years, i{"'"}m still learning and gaining new skills every day</p>
      </div>

      <div className="my-[12%] flex flex-col gap-5">
        {projetcs.map((works) => (
          <motion.div 
            key={works.id} 
            className='relative'
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            onClick={() => handleClick(works.path)}
            transition={{ type: 'spring', stiffness: 100 }}
            >
            <h1 className='h1 text-[7rem] hover:italic transition-all cursor-pointer'>{works.text}</h1>
            <p className='absolute bottom-1 uppercase'>- web development</p>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Works