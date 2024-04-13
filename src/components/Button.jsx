import { Link } from "react-router-dom"

const Button = ({ text, path, target }) => {
  return (
    <Link to={path} target={target}>
        <button className="px-16 py-3 my-6 bg-text-50 text-bg-50 hover:px-28 rounded-[50px] transition-all text-[1.5rem] h1">
            {text}
        </button>
    </Link>
  )
}

export default Button