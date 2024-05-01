import { Link } from "react-router-dom"
import screenshot from '../../assets/images/medicare.png'
import Button from "../../components/Button"
import { motion } from "framer-motion"

const Medicare = () => {
  return (
  <section className="w-full h-full bg-bg-50 text-text-50 px-5 md:px-0 md:pr-[8%] font-Montserrat text-[0.89rem]">
    <div className="w-full h-full flex flex-col items-center justify-center lg:gap-16 gap-8">
      <div className="w-full max-h-[750px] overflow-hidden bg-text-50 text-bg-50 h-[70vh] md:h-[95vh] pt-[20rem] lg:mb-10">
        <motion.h1
            initial={{y: '100vh'}}
            animate={{y: 0}}
            transition={{ duration: 1.5, ease: 'easeOut'}} 
            className="h1 text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] xl:text-[13rem] text-center w-full"
          >
            Medicare
          </motion.h1>
      </div>

        <motion.div
          initial={{ filter: 'blur(100px)' }}
          animate={{ filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: 'easeInOut'}}  
          className="w-full max-w-[800px]">
          <h1 className="h1 text-[1.5rem] lg:text-[2.5rem]">
            A website built in react to help connect patients with a doctor of their choice
          </h1>

          <div className="flex w-full flex-col lg:flex-row gap-6 lg:gap-0 justify-between items-start py-10">
            <div className="max-w-[150px]">
              <h1 className="uppercase text-[1rem] font-medium border-b border-black w-fit">Role</h1>
              <p className="pt-4">Website Design and web development</p>
            </div>
            <div className="max-w-[300px]">
              <h1 className="uppercase text-[1rem] font-medium border-b border-black w-fit">Responsibilities</h1>
              <div className="pt-4">
                website Development,
              </div>
            </div>
            <div>
              <h1 className="uppercase text-[1rem] font-medium border-b border-black w-fit">URL</h1>
              <Link to='https://vaderhospital.vercel.app/' target="_blank">
                <p className="pt-4 hover:border-b border-black transition-all">https://vaderhospital.vercel.app</p>
              </Link>
            </div>
          </div>
        </motion.div>

        <img 
          src={screenshot} 
          alt="anon store"
          className="rounded-xl shadow-xl w-full max-w-[1200px]" 
        />

        <p className="text-[1rem] max-w-[700px]">
          Medicare is a vision for a future where healthcare is accessible and efficient for everyone. It aims at empowering patients and doctors to connect seamlessly, fostering a collaborative environment that prioritizes well-being.
        </p>

        <div className="text-[1rem] max-w-[700px]">
          <h1 className="font-medium mb-3">Imagine a world where:</h1>
          <ul className="text-[0.9rem] list-inside list-disc flex flex-col gap-4">
            <li>
              Finding the right doctor is a breeze. Gone are the days of endless phone calls and frustrating online searches. With Medicare, patients can browse a comprehensive database of qualified doctors, filtering by specialization, location, and even patient reviews.
            </li>
            <li>
              Booking appointments becomes a stress-free experience. No more waiting on hold or battling busy schedules. Medicare allows patients to schedule appointments directly with their chosen doctor, all within a user-friendly platform.
            </li>
            <li>
              The gap between patients and doctors narrows. Clear communication becomes the norm, with tools for easy online consultations and follow-up care.
            </li>
          </ul>
        </div>

        <iframe 
          className="w-full max-w-[1200px] h-[300px] lg:h-[600px]" 
          src="https://www.youtube.com/embed/l1WyqWCYDm4?controls=0&modestbranding=1&rel=0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen 
        />

        <p className="text-[1rem] max-w-[700px]">
          This is the future Medicare strives to create.  While the beautifully designed frontend lays the groundwork for this vision, the project currently faces limitations due to my own development skillset.  Backend development is an area I'm actively seeking to improve upon, and with that missing piece, Medicare can truly blossom into a powerful tool that revolutionizes healthcare accessibility.
        </p>

        <div className="text-center py-10">
          <h1 className="h1 text-[2rem] md:text-[2.5rem]">Check it out.</h1>
          <Button target="_blank" path='https://vaderhospital.vercel.app/' text='https://vaderhospital.vercel.app'/>
        </div>
    </div>
  </section> 
  )
}

export default Medicare