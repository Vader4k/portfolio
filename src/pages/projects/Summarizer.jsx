import { Link } from "react-router-dom"
import screenshot from '../../assets/images/summarizer.png'
import Button from '../../components/Button'

const Summarizer = () => {
  return (
    <section className="w-full h-full bg-bg-50 text-text-50 pr-[8%] font-Montserrat text-[0.89rem]">
      <div className="w-full h-full flex flex-col items-center justify-center gap-16">
        <h1 className="h1 text-[13rem] bg-text-50 text-bg-50 h-[95vh] pt-[30rem] mb-10 text-center w-full">Summarizer</h1>
        <div className="max-w-[800px]">
          <h1 className="h1 text-[2.5rem]">
            Website design and development of an AI Article summarizer using Rapid Api - a personal project.
          </h1>

          <div className="flex w-full justify-between items-start py-10">
            <div className="max-w-[150px]">
              <h1 className="uppercase text-[1rem] font-medium border-b border-black w-fit">Role</h1>
              <p className="pt-4">Website Design and web development</p>
            </div>
            <div className="max-w-[300px]">
              <h1 className="uppercase text-[1rem] font-medium border-b border-black w-fit">Responsibilities</h1>
              <div className="pt-4">
                Research, website Design, Optimisation, Development, Launch, State Management
              </div>
            </div>
            <div>
              <h1 className="uppercase text-[1rem] font-medium border-b border-black w-fit">URL</h1>
              <Link to='https://v-summarizer.netlify.app/' target="_blank">
                <p className="pt-4 hover:border-b border-black transition-all">https://v-summarizer.netlify.app</p>
              </Link>
            </div>
          </div>
        </div>

        <img src={screenshot} className="rounded-xl shadow-xl w-full max-w-[1200px]" alt="article summarizer" />

        <p className="text-[1rem] max-w-[700px]">
          I came across this project on youtube while trying to learn and understand redux state management and it{"'"}s use cases.
          After watching the video, i decided to recreate it to challenge myself and see if i really understood when and how to use the CreateApi method in Redux and it turned out well 😄 
        </p>

        <p className="text-[1rem] max-w-[700px]">
          The input element takes a text input and it checks to validate if it{"'"}s a valid url before making the api call and returning the summary. Plus, it saves your search history and you can easily copy and paste it anytime you need.
        </p>

        <iframe 
          src="https://www.youtube.com/embed/qgk1OgHOCYA?controls=0&modestbranding=1&rel=0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
          className="w-full max-w-[1200px] h-[600px]"
        />

        <div className="text-center py-16">
          <h1 className="h1 text-[2.5rem]">Check it out.</h1>
          <Button target="_blank" path='https://v-summarizer.netlify.app' text='https://v-summarizer.netlify.app'/>
        </div>

      </div>
    </section>
  )
}

export default Summarizer