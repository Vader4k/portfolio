import { Link } from "react-router-dom"
import screenshot from '../../assets/images/socialcheap.png'
import Button from "../../components/Button"
import { motion } from "framer-motion"

const Socialcheap = () => {
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
            Socialcheap
          </motion.h1>
      </div>

        <motion.div
          initial={{ filter: 'blur(100px)' }}
          animate={{ filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: 'easeInOut'}}  
          className="w-full max-w-[800px]">
          <h1 className="h1 text-[1.5rem] lg:text-[2.5rem]">
            Design and development of a website that provides you with virtual numbers
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
                consultation,
                SEO,
                Image saving & optimization
              </div>
            </div>
            <div>
              <h1 className="uppercase text-[1rem] font-medium border-b border-black w-fit">URL</h1>
              <Link to='https://socialcheap.shop/' target="_blank">
                <p className="pt-4 hover:border-b border-black transition-all">https://socialcheap.shop</p>
              </Link>
            </div>
          </div>
        </motion.div>

        <img 
          src={screenshot} 
          alt="social cheap"
          className="rounded-xl shadow-xl w-full max-w-[1200px]" 
        />

        <p className="text-[1rem] max-w-[700px]">
          Socialcheap provides solutions for private registration on a diverse range of sites, services.
        </p>

        <div className="text-[1rem] max-w-[700px]">
            Our versatile platform adapts to your changing needs, providing encrypted communication and effortless integration. With a network comprising 500 mobile operators and providers across 150 countries, our proxies deliver a seamless online experience, ensuring you stay connected without interruptions. At Social Cheap, we don{"'"}t just offer services; We shape the future of virtual communication and online security. Join us on this journey and discover a new era of convenience and effectiveness in the digital landscape.
        </div>

        <div className="text-[1rem] max-w-[700px]">
            <h1 className="py-3 h1 text-[1.5rem]">Social Cheap: My Everest of Collaboration and Learning</h1>
            <p>Social Cheap, a project that{"'"}s become my personal Everest in terms of collaboration and learning, is finally live! This virtual number powerhouse, built with React and Tailwind on the frontend, empowers users to acquire phone numbers from various countries and access the incoming SMS they receive. Beyond its functionality, the journey of building Social Cheap has been an invaluable learning experience, pushing me as a frontend engineer and fostering a fantastic collaboration with the backend engineer.</p>
        </div>

        <div className="text-[1rem] max-w-[700px]">
            <h1 className="py-3 h1 text-[1.5rem]">Learning Curve: Scaling the Heights of React and Beyond</h1>
            <p>Social Cheap wasn{"'"}t just a project; it was a springboard for my React development. I delved into advanced concepts like state management, component communication, and API integration. Each hurdle presented an opportunity to learn – from mastering user authentication with OAuth to optimizing performance for a smooth user experience. The project also introduced me to Tailwind, a powerful CSS framework that allowed me to create a visually appealing and responsive interface with incredible efficiency. Every line of code, every design decision, was a lesson learned, solidifying my understanding of frontend development principles.</p>
        </div>

        <div className="text-[1rem] max-w-[700px]">
            <h1 className="py-3 h1 text-[1.5rem]"> A Growing Chorus of Users</h1>
            <p>The most gratifying aspect of Social Cheap is seeing it come alive in the real world. It{"'"}s no longer just lines of code on a screen; it{"'"}s a tool that empowers users with virtual numbers and seamless SMS access. Witnessing the daily increase in user base fills us with a sense of accomplishment and validates the countless hours invested in the project. Social Cheap is not just a product; it{"'"}s a testament to the power of collaboration, continuous learning, and the satisfaction of creating something impactful for the world.</p>
        </div>

        <iframe 
          className="w-full max-w-[1200px] h-[300px] lg:h-[600px]" 
          src="https://www.youtube.com/embed/O7wXhvEiHsM?controls=0&modestbranding=1&rel=0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen 
        />

        <div className="text-center py-10">
          <h1 className="h1 text-[2rem] md:text-[2.5rem]">Check it out.</h1>
          <Button target="_blank" path='https://socialcheap.shop/' text='https://socialcheap.shop'/>
        </div>
    </div>
  </section> 
  )
}

export default Socialcheap

