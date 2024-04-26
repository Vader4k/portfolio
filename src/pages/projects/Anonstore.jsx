import { Link } from "react-router-dom"
import screenshot from '../../assets/images/anon.png'
import Button from "../../components/Button"

const Anonstore = () => {
  return (
    <section className="w-full h-full bg-bg-50 text-text-50 pr-[8%] font-Montserrat text-[0.89rem]">
      <div className="w-full h-full flex flex-col items-center justify-center gap-16">
        <h1 
          className="h1 text-[13rem] bg-text-50 text-bg-50 h-[95vh] pt-[20rem] mb-10 text-center w-full"
        >
          AnonStore
        </h1>

        <div className="max-w-[800px]">
          <h1 className="h1 text-[2.5rem]">
            Website design and development of a simple shopping website using vanilla js - a personal project
          </h1>

          <div className="flex w-full justify-between items-start py-10">
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
              <Link to='https://anon-stores.vercel.app/' target="_blank">
                <p className="pt-4 hover:border-b border-black transition-all">https://anon-stores.vercel.app</p>
              </Link>
            </div>
          </div>
        </div>

        <img 
          src={screenshot} 
          alt="anon store"
          className="rounded-xl shadow-xl w-full max-w-[1200px]" 
        />

        <p className="text-[1rem] max-w-[700px]">
          The Anon Store wasn{"'"}t just a project; it was a thrilling escapade into the world of CSS and Javascript!  While building this online store (with a touch of anonymity, of course ), I found myself getting swept away by the creative possibilities that these languages offered.
        </p>

        <p className="text-[1rem] max-w-[700px]">
          The Anon Store wasn{"'"}t just a project - it was a learning adventure. It helped me understand JavaScript way better, with each problem I solved giving me a {'"'}lightbulb moment.{'"'} It was exciting, filled with {'"'}aha!{'"'} moments and a growing feeling of satisfaction.
        </p>

        <iframe 
          className="w-full max-w-[1200px] h-[600px]" 
          src="https://www.youtube.com/embed/z8YEdF7N7Qg?controls=0&modestbranding=1&rel=0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen 
        />

        
        <div className="text-center py-10">
          <h1 className="h1 text-[2.5rem]">Check it out.</h1>
          <Button target="_blank" path='https://anon-stores.vercel.app/' text='https://anon-stores.vercel.app/'/>
        </div>
      </div>
    </section>
  )
}

export default Anonstore