import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section className="w-full min-h-[100vh] flex md:items-center py-20 md:py-0 justify-start bg-text-50 px-8 md:px-20 text-bg-50">
      <div>
        <div className='max-h-[230px] overflow-hidden'>
          <motion.h1
            initial={{y:'100vh'}}
            animate={{y:0}}
            transition={{ duration: 1, ease: 'easeOut'}} 
            className="h1 overflow-hidden text-[4rem]  md:text-[8rem]  lg:text-[10rem]  xl:text-[16rem] xl:leading-[16rem]"
          >
            Hello.
          </motion.h1>
        </div>
        <div className='max-h-[200px] overflow-hidden'>
          <motion.div
            initial={{y:'30vh'}}
            animate={{y:0}}
            transition={{ duration: 0.8, ease: 'easeOut'}} 
          >
            <p className="text-[0.9rem] max-w-[500px] leading-6 font-Montserrat py-6">Need a developer to build a well-structured website you can own and maintain? Get in touch</p>

            <span className="text-[0.9rem] max-w-[600px] leading-6 font-Montserrat">
              Email: <a className="underline" href="mailto:kingdanny295@gmail.com">kingdanny295@gmail.com</a>
            </span>

            <div className="text-[0.9rem] max-w-[500px] leading-6 font-Montserrat">
              On the internet : {" "}  
              <a className="underline hover:line-through" href='https://www.linkedin.com/in/odukwe-daniel-09920a286/' target="_blank">Linkedin</a> / 
              
              <a href='https://twitter.com/kingdanny295' target="_blank" className="underline hover:line-through">Twitter</a> / 
              
              <a href='https://github.com/vader4k' target="_blank" className="underline hover:line-through">Github</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact