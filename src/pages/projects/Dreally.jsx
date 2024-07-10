import { Link } from "react-router-dom"
import screenshot from '../../assets/images/dreally.png'
import Button from "../../components/Button"
import { motion } from "framer-motion"

const Dreally = () => {
  return (
    <section className="w-full h-full bg-bg-50 text-text-50 px-5 md:px-0 md:pr-[8%] font-Montserrat text-[0.89rem]">
      <div className="flex flex-col items-center justify-center w-full h-full gap-8 lg:gap-16">
        <div className="w-full max-h-[750px] overflow-hidden bg-text-50 text-bg-50 h-[70vh] md:h-[95vh] pt-[20rem] lg:mb-10">
          <motion.h1
            initial={{y: '100vh'}}
            animate={{y: 0}}
            transition={{ duration: 1.5, ease: 'easeOut'}}  
              className="h1 text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] xl:text-[13rem] text-center w-full"
            >
              Dreally
          </motion.h1>
        </div>

        <motion.div
          initial={{ filter: 'blur(100px)' }}
          animate={{ filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: 'easeInOut'}} 
          className="w-full max-w-[800px]">
            <h1 className="h1 text-[1.5rem] lg:text-[2.5rem]">
              Dreally is a comprehensive networking platform that helps users connect seamlessly
            </h1>

            <div className="flex flex-col items-start justify-between w-full gap-6 py-10 lg:flex-row lg:gap-0">
              <div className="max-w-[150px]">
                <h1 className="uppercase text-[1rem] font-medium border-b border-black w-fit">Role</h1>
                <p className="pt-4">web development</p>
              </div>
              <div className="max-w-[300px]">
                <h1 className="uppercase text-[1rem] font-medium border-b border-black w-fit">Responsibilities</h1>
                <div className="pt-4">
                  website Development, collaboration with ui/ux designer, product design
                </div>
              </div>
              <div>
                <h1 className="uppercase text-[1rem] font-medium border-b border-black w-fit">URL</h1>
                <Link to='https://dreally.com/' target="_blank">
                  <p className="pt-4 transition-all border-black hover:border-b">https://dreally.com</p>
                </Link>
              </div>
            </div>
        </motion.div>

        
        <img 
          src={screenshot} 
          alt="hoobank"
          className="rounded-xl shadow-xl w-full max-w-[1200px]" 
        />

        <p className="text-[1rem] max-w-[700px]">
          Dreally is typically an upgrade of linktree. It is comprehensive networking platform that allows users to create digital business cards, showcase their portfolios, and connect with others seamlessly. Users can customize their profiles, share contact information, and network effortlessly using Dreally{"'"}s intuitive interface.
        </p>

        <h1 className="h1 text-[1.5rem]">
          What makes dreally special
        </h1>

        <p className="text-[1rem] max-w-[700px]">
            Dreally is designed to cater to both personal and business needs. Whether you{"'"}re an individual looking to showcase your talents or a business owner seeking to expand your network, Dreally offers features and functionalities to suit your requirements.
        </p>

        <p className="text-[1rem] max-w-[700px]">
            Dreally{"'"}s digital business cards offer several advantages over traditional paper cards. They are eco-friendly, easily shareable via email or social media, customizable to reflect your branding, and provide analytics insights into engagement. Plus, they eliminate the need for printing and carrying physical cards
        </p>

        <iframe 
          className="w-full max-w-[1200px] h-[300px] lg:h-[600px]" 
          src="https://www.youtube.com/embed/h3SEV1Xg3cA?controls=0&modestbranding=1&rel=0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen 
        />

        <div className="py-10 text-center">
          <h1 className="h1 text-[2rem] md:text-[2.5rem]">Check it out.</h1>
          <Button target="_blank" path='https://dreally.com/' text='https://dreally.com'/>
        </div>
      </div>
    </section>
  )
}

export default Dreally