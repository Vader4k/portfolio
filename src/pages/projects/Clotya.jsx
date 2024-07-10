import { Link } from "react-router-dom"
import screenshot from '../../assets/images/clotya.png'
import Button from "../../components/Button"
import { motion } from "framer-motion"


const Clotya = () => {
  return (
    <section className="w-full h-full bg-bg-50 text-text-50 px-5 md:px-0  md:pr-[8%] font-Montserrat text-[0.89rem]">
      <div className="flex flex-col items-center justify-center w-full h-full gap-8 lg:gap-16">
        <div className="max-h-[750px] overflow-hidden bg-text-50 text-bg-50 h-[70vh] md:h-[95vh] pt-[20rem] lg:mb-10 w-full">
          <motion.h1
            initial={{y: '100vh'}}
            animate={{y: 0}}
            transition={{ duration: 1.5, ease: 'easeOut'}} 
            className="h1 text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] xl:text-[13rem text-center w-full"
        >
          Clotya
        </motion.h1>
        </div>

        <motion.div
          initial={{ filter: 'blur(100px)' }}
          animate={{ filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: 'easeInOut'}}  
          className="w-full max-w-[800px]">
          <h1 className="h1 text-[1.5rem] lg:text-[2.5rem]">
            Clotya is a MERN stack - E-commerce web application
          </h1>

          <div className="flex flex-col items-start justify-between w-full gap-6 py-10 lg:flex-row lg:gap-0">
            <div className="max-w-[150px]">
              <h1 className="uppercase text-[1rem] font-medium border-b border-black w-fit">Role</h1>
              <p className="pt-4">Frontend developer</p>
              <p className="pt-4">Backend developer</p>
            </div>
            <div className="max-w-[300px]">
              <h1 className="uppercase text-[1rem] font-medium border-b border-black w-fit">Responsibilities</h1>
              <div className="pt-4">
                Fullstack Development,
              </div>
            </div>
            <div>
              <h1 className="uppercase text-[1rem] font-medium border-b border-black w-fit">URL</h1>
              <Link to='https://clotya.vercel.app/' target="_blank">
                <p className="pt-4 transition-all border-black hover:border-b">https://clotya.vercel.app</p>
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
          Creating my first MERN stack e-commerce project, "Clotya," was a journey filled with challenges, learning, and immense satisfaction. The experience taught me a great deal about various aspects of web development, especially in the areas of user authentication, API management, and payment gateway integration. Reflecting on this project, I am proud of the progress I made and the knowledge I gained.
          From the outset, I knew that implementing user authentication would be a crucial part of the project. Understanding how to securely handle user data, create and manage tokens, and ensure that only authorized users can access certain parts of the site was both challenging and rewarding.
        </p>

        <p className="text-[1rem] max-w-[700px]">
          I learned to use JSON Web Tokens (JWT) for authentication and discovered the importance of setting HttpOnly and Secure flags for cookies to enhance security. This aspect of the project deepened my understanding of how to protect user information and maintain the integrity of the application.
          Integrating email functionalities using Mailinator was another highlight. Setting up the email service to handle tasks such as sending verification emails and password reset links added a layer of complexity to the project. I had to figure out how to generate and validate tokens for these emails, manage their expiration times, and ensure that the emails were delivered reliably. This process not only improved my technical skills but also taught me how to handle real-world scenarios where communication between the application and its users is essential.
        </p>
        <p className="text-[1rem] max-w-[700px]">
          Making API calls in the frontend and managing user data across various components was a significant part of the project's development. I learned to use tools like Redux to manage the state of the application efficiently. This helped me ensure that user data was consistent and up-to-date across all components. Handling asynchronous API calls, managing loading states, and implementing proper error handling mechanisms were all part of this learning curve. These skills are crucial for any modern web application, and mastering them gave me a solid foundation for future projects.
          One of the most exciting yet challenging parts of the project was integrating a payment gateway. I chose Paystack for this purpose, and the process of setting it up was an invaluable learning experience. Understanding how to securely handle transactions, manage payment histories, and ensure that the payment process was seamless and user-friendly was a huge accomplishment. It made me appreciate the intricacies involved in handling financial data and the importance of ensuring a smooth user experience.
        </p>

        <iframe 
          className="w-full max-w-[1200px] h-[300px] lg:h-[600px]" 
          src="https://www.youtube.com/embed/B8GHy3Xltss?controls=0&modestbranding=1&rel=0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen 
        />
        
        <div className="py-10 text-center">
          <h1 className="h1 text-[2rem] md:text-[2.5rem]">Check it out.</h1>
          <Button target="_blank" path='https://clotya.vercel.app/' text='https://clotya.vercel.app/'/>
        </div>
      </div>
    </section>
  )
}

export default Clotya