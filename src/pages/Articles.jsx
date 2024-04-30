import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import ArticleHolder from "../components/ArticleHolder"
import array from '../assets/images/array.jpg'
import keyboard from '../assets/images/keyboard.jpg'
import loop from '../assets/images/loop.jpg'
import tethral from '../assets/images/tethral.jpg' 



const Articles = () => {

  const [viewArticle, setViewArticle] = useState(false)
  const [selectedArticle, setSelectedArticle] = useState(0)
  const [articles, setArticles] = useState([]); // State for articles data

  useEffect(() => {
    const fetchArticles = [
      {
        id: 1,
        title: 'The secrets to mastering any framework with ease.',
        path: 'https://tethral.com/the-secrets-to-mastering-any-framework-with-ease/',
        text: "Welcome to the exciting world of software engineering, where the learning journey never really stops! Let’s dive into 10 super-friendly roadmap to grasp any technology and become a maestro in record time.",
        timer: '3 Minutes Read',
        img: tethral
    },
    {
        id:2,
        title: 'Understanding keyboard events in javascript',
        path: 'https://www.showwcase.com/article/34387/understanding-keyboard-events-in-javascript',
        text: 'In JavaScript, keyboard events are used to detect when a user presses or releases a key on their keyboard. This is useful in various scenarios, particularly in web applications where users may need to input text or navigate through keyboard shortcuts',
        timer: '3 Minutes Read',
        img: keyboard
    },
    {
        id: 3,
        title: 'manipulating arrays using array methods in JavaScript',
        path: 'https://kingvader.hashnode.dev/how-to-manipulate-arrays-using-array-methods-in-javascript',
        text: 'An array is a data structure that stores a collection of values such as numbers, strings, objects, and other arrays.The values in an array are organized linearly and can be accessed by their index, which is their numerical position on the array.',
        timer: '5 Minutes Read',
        img: array
    },
    {
        id: 4,
        title: 'Understanding Loops in JavaScript.',
        path: 'https://www.showwcase.com/article/34525/understanding-loops-in-javascript',
        text: 'Loops in JavaScript are control structures that allows for the execution of a block of code repeatedly. Basically, loops are useful when running a particular operation multiple times. Loops are very useful in programming',
        timer: '3 Minutes Read',
        img: loop
    }
    ];
    setArticles(fetchArticles)
  },[])

  const handleClickedArticle = (id) => {
    setViewArticle(true)
    setSelectedArticle(id)
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

      {viewArticle && (
        <ArticleHolder
          onClose={handleClose}
          data={articles.find((a) => a.id === selectedArticle)} // Improved data fetching
        />
      )}
    </div>
    </>

  )
}

export default Articles