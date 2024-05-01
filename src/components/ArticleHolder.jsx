import { motion } from 'framer-motion';
import read from '../assets/images/now.gif'
import { Link } from 'react-router-dom';


const ArticleHolder = ({ onClose, data }) => {

    const backdropVariants = {
        open: { opacity: 1 },
        closed: { opacity: 0, duration: 0.5 },
      };
    
      const modalVariants = {
        open: { y: 0, opacity: 1 },
        closed: { y: '100vh', opacity: 0, duration: 0.5 },
      };


  return (
    <motion.div
      initial="closed"
      animate="open"
      exit="closed"
      variants={backdropVariants}
      className="fixed flex items-center justify-center top-0 left-0 w-full h-full z-50" // Ensure high z-index
    >
      <motion.div variants={modalVariants} className="relative text-text-50 bg-bg-50 rounded-xl w-full max-w-[600px] h-fit mx-5 z-[50]">  {/* High z-index */}
        <div
          onClick={onClose} 
          className='w-[35px] h-[35px] absolute top-2 right-3 rounded-full flex items-center justify-center bg-text-50 cursor-pointer hover:animate-spin'>
            <img width="25" height="25" src="https://img.icons8.com/EDE7E0/sf-regular/48/delete-sign.png" alt="delete-sign"/>
          </div>
        <div className='flex flex-col gap-4'>
          <motion.img
            initial={{scale: 0}}
            animate={{scale:1}}
            transition={{duration: 1, ease: 'easeOut'}} 
            className='w-full h-[300px] object-cover rounded-xl' src={data.img} alt={data.title} />
          <h1 className='text-center md:text-[1.2rem] font-medium capitalize'>{data.title}</h1>
          <p className='px-6 text-[0.8rem]'>
            {data.timer}
          </p>
          <div className='max-h-[150px] overflow-hidden px-6'>
            <motion.p
              className='text-[0.85rem] md:text-[1rem]'
              initial={{y:'30vh'}}
              animate={{y:0}}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5}}
            >{data.text}</motion.p>
          </div>
          <Link to={data.path} target='_blank' className='w-fit max-w-[200px] mx-auto pb-6'>
            <button className='flex w-fit items-center gap-3 text-text-50 bg-white p-2 rounded-2xl'>
              <img className='w-[20px] h-[20px]' src={read} alt="read" />
              <p className='text-[0.9rem] font-medium text-text-50'>Read Now</p>
            </button>
          </Link>
        </div>
      </motion.div>
      <motion.div variants={backdropVariants} className="absolute w-full h-full bg-black z-40" />  {/* Lower z-index for backdrop */}
    </motion.div>
  )
}

export default ArticleHolder