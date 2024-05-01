import { Link } from "react-router-dom"
import screenshot from '../../assets/images/coinking.png'
import Button from "../../components/Button"
import { motion } from 'framer-motion'

const Coinking = () => {
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
            Coinking
        </motion.h1>
      </div>

      <motion.div
        initial={{ filter: 'blur(100px)' }}
        animate={{ filter: 'blur(0px)' }}
        transition={{ duration: 1, ease: 'easeInOut'}} 
        className="w-full max-w-[800px]">
          <h1 className="h1 text-[1.5rem] lg:text-[2.5rem]">
            CoinKing is a crypto website i made to get my own personal cryptocurrency updates all in one place
          </h1>

          <div className="flex w-full flex-col lg:flex-row gap-6 lg:gap-0 justify-between items-start py-10">
            <div className="max-w-[150px]">
              <h1 className="uppercase text-[1rem] font-medium border-b border-black w-fit">Role</h1>
              <p className="pt-4">web development, website design and architecture</p>
            </div>
            <div className="max-w-[300px]">
              <h1 className="uppercase text-[1rem] font-medium border-b border-black w-fit">Responsibilities</h1>
              <div className="pt-4">
                website Development, website design
              </div>
            </div>
            <div>
              <h1 className="uppercase text-[1rem] font-medium border-b border-black w-fit">URL</h1>
              <Link to='https://friends-vader2k.vercel.app/' target="_blank">
                <p className="pt-4 hover:border-b border-black transition-all">https://coinking.vercel.app</p>
              </Link>
            </div>
          </div>
      </motion.div>

      
      <img 
        src={screenshot} 
        alt="hoobank"
        className="rounded-xl shadow-xl w-full max-w-[1200px]" 
      />

      <h1 className="h1 text-[1.5rem]">
        Ever struggled with getting all your crypto info
      </h1>
      <p className="text-[1rem] max-w-[700px]">
        <strong>Introducing Coinking!</strong> This is a project I{"'"}m passionate about, designed to empower you with comprehensive cryptocurrency information. coinking leverages the Coinranking API and various reputable crypto news sources to deliver insightful data on a wide range of digital assets. From the top 100 established currencies to the latest emerging tokens and trending movers, coinking keeps you informed about all things crypto. Additionally, it provides valuable details to help you make informed investment decisions.
      </p>

      <p className="text-[1rem] max-w-[700px]">
        Curated from a diverse range of trusted sources like Coindesk, Cointelegraph, Bitcoinist, Decrypt, BSC News, and even The Guardian{"'"}s crypto coverage, Coinking delivers breaking news and market updates right when you need them
      </p>

      <p className="text-[1rem] max-w-[700px]">
        Coinking is built with React, a popular JavaScript library known for its efficiency in creating dynamic user interfaces. This enables Coinking to seamlessly display real-time data and personalized charts.
        Coinking leverages dynamic routing to deliver dedicated pages for each cryptocurrency. This allows users to easily explore detailed information about specific coins using their unique identifiers retrieved from the API data <br />
        Further enhancing the user experience, Coinking incorporates Recharts, a robust charting library for React. This empowers users to visualize price movements and market trends for each cryptocurrency across various timeframes based on their preferences.
      </p>

      <p className="text-[1rem] max-w-[700px]">
        Coinking leverages dynamic routing to deliver dedicated pages for each cryptocurrency. This allows users to easily explore detailed information about specific coins using their unique identifiers retrieved from the API data.
        Further enhancing the user experience, Coinking incorporates Recharts, a robust charting library for React. This empowers users to visualize price movements and market trends for each cryptocurrency across various timeframes based on their preferences.
      </p>

      <iframe 
        className="w-full max-w-[1200px] h-[300px] lg:h-[600px]" 
        src="https://www.youtube.com/embed/l2AhkjD1Ydc?controls=0&modestbranding=1&rel=0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen 
      />

      <div className="text-center py-10">
        <h1 className="h1 text-[2rem] md:text-[2.5rem]">Check it out.</h1>
        <Button target="_blank" path='https://coinking.vercel.app/' text='https://coinking.vercel.app'/>
      </div>
    </div>
  </section>
  )
}

export default Coinking