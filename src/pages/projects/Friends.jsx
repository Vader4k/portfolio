import { Link } from "react-router-dom" 
import screenshot from '../../assets/images/friends.png'
import Button from "../../components/Button"

const Friends = () => {
  return (
    <section className="w-full h-full bg-bg-50 text-text-50 px-5 md:px-0 md:pr-[8%] font-Montserrat text-[0.89rem]">
      <div className="w-full h-full flex flex-col items-center justify-center lg:gap-16 gap-8">
        <h1 
            className="h1 text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] xl:text-[13rem] bg-text-50 text-bg-50 h-[70vh] md:h-[95vh] pt-[20rem] lg:mb-10 text-center w-full"
          >
            Friends
        </h1>

        <div className="w-full max-w-[800px]">
            <h1 className="h1 text-[1.5rem] lg:text-[2.5rem]">
              Friends: My Social Media Application (or how it{"'"}ll look like if i created one!)
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
                <Link to='https://friends-vader2k.vercel.app/' target="_blank">
                  <p className="pt-4 hover:border-b border-black transition-all">https://friends-vader2k.vercel.app</p>
                </Link>
              </div>
            </div>
        </div>

        <img 
          src={screenshot} 
          alt="hoobank"
          className="rounded-xl shadow-xl w-full max-w-[1200px]" 
        />

        <p className="text-[1rem] max-w-[700px]">
          While a portfolio often showcases websites and applications, I believe it{"'"}s also valuable to demonstrate the ability to translate stunning design into functional code.  This social media app is a testament to that approach
        </p>

        <h1 className="h1 text-[1.5rem]">
          Inspiration Meets Implementation:
        </h1>

        <p className="text-[1rem] max-w-[700px]">
          Browsing ThemeForest, I stumbled upon a captivating social media app design. The visual appeal was undeniable, but I saw the potential to bring it to life as a fully functional application. This project became an exercise in bridging the gap between creativity and technical execution.
        </p>
        
        <div className="flex flex-col items-center gap-4">
          <h1 className="h1 text-[1.5rem]">The Journey</h1>
          <p className="h1 font-bold">
            The development process involved
          </p>
          <ul className="max-w-[700px] list-inside list-disc flex flex-col gap-4">
            <li>
              Deconstructing the Design: I meticulously analyzed the design elements, dissecting the layout, interactions, and visual components.
            </li>
            <li>
              Translating Design to Code: Using my programming skills, I carefully transformed the design into a functional application, ensuring a seamless user experience.
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center gap-4">
          <h1 className="h1 text-[1.5rem]">The Outcome</h1>
          <p className="h1 font-bold">
            This project demonstrates my ability to:
          </p>
          <ul className="max-w-[700px] list-inside list-disc flex flex-col gap-4">
            <li>
              Identify and leverage compelling design inspiration.
            </li>
            <li>
              Translate design concepts into user-friendly and interactive interfaces.
            </li>
          </ul>
        </div>


        <iframe 
          className="w-full max-w-[1200px] h-[300px] lg:h-[600px]" 
          src="https://www.youtube.com/embed/6Fi7nNnZdRg?controls=0&modestbranding=1&rel=0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen 
        />

        
        <div className="max-w-[700px] flex items-center flex-col gap-4">
          <h1 className="h1 text-[1.5rem]">Beyond the Code:</h1>

          <p className="leading-6">
            This project served as a valuable learning experience, pushing me to refine my development skills and strengthen my design-to-code translation abilities. It{"'"}s a testament to the power of combining creativity with technical expertise
          </p>
        </div>

        <div className="text-center py-10">
          <h1 className="h1 text-[2rem] md:text-[2.5rem]">Check it out.</h1>
          <Button target="_blank" path='https://friends-vader2k.vercel.app/' text='https://friends-vader2k.vercel.app'/>
        </div>
      </div>
    </section>
  )
}

export default Friends