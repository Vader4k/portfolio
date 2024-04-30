import { motion } from "framer-motion"
import { articles } from "../constants"
import { useState } from "react"
import ArticleHolder from "../components/ArticleHolder"



const Articles = () => {

  const [viewArticle, setViewArticle] = useState(false)
  const [selectedArticle, setSelectedArticle] = useState(0)

  const handleClickedArticle = (id) => {
    setViewArticle(true)
    setSelectedArticle(id)
    console.log(selectedArticle)
  }

  const handleClose = () => {
    setViewArticle(false)
    setSelectedArticle(0)
  }

  return (
    <>
    <div className="w-full min-h-[100vh] bg-text-50 h-full text-bg-50 flex flex-col py-20 lg:py-0 lg:flex-row lg:items-end justify-evenly gap-20 px-10 lg:px-5">
      <div className='sticky bottom-20 max-h-[300px] overflow-hidden w-full'>
        <motion.div
          initial={{y:'50vh'}}
          animate={{y:0}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5}}   
          className="font-Montserrat text-[0.8rem] leading-6 lg:max-w-[350px] flex flex-col gap-6">
          <h1 className="text-[1.1rem] font-medium">Articles</h1>

          <p> Each article is a glimpse into my journey of growth, learning, and discovery. So grab a cup of coffee, settle into a comfortable spot, and join me on this journey of exploration and self-expression through the written word.</p>
        </motion.div>
      </div>

      <div className="lg:my-[12%] flex flex-col gap-10 w-full lg:mr-10">
        {articles.map((works) => (
          <motion.div
            initial={{ filter: 'blur(60px)', opacity: 0 }}
            animate={{ filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}  
            key={works.id} 
            className='relative'
            >
            <h1 onClick={() => handleClickedArticle(works.id)} className='h1 text-[2rem] hover:border-b hover:animate-pulse transition-all cursor-pointer capitalize'>{works.title}</h1>
          </motion.div>
        ))}
      </div>

      {viewArticle && selectedArticle === 1 && (
        <ArticleHolder 
          onClose={handleClose}
          selectedArticle={selectedArticle}
          data={articles[0]}
        />
      )}
      {viewArticle && selectedArticle === 2 && (
        <ArticleHolder 
          onClose={handleClose}
          selectedArticle={selectedArticle}
          data={articles[1]}
        />
      )}
      {viewArticle && selectedArticle === 3 && (
        <ArticleHolder 
          onClose={handleClose}
          selectedArticle={selectedArticle}
          data={articles[2]}
        />
      )}
      {viewArticle && selectedArticle === 4 && (
        <ArticleHolder 
          onClose={handleClose}
          selectedArticle={selectedArticle}
          data={articles[3]}
        />
      )}
    </div>
    </>

  )
}

export default Articles