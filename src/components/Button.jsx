import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Button = ({ text, path, target }) => {
  return (
    <Link to={path} target={target}>
      <motion.div
        initial={{ y: "-50vh" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-4-[60px] overflow-hidden">
        <button className=" px-8 py-3 my-6 bg-text-50 text-bg-50 hover:px-16 rounded-[50px] transition-all lg:text-[1.2rem] h1">
              {text}
          </button>
      </motion.div>
    </Link>
  )
}

export default Button