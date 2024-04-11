import { Routes, Route } from "react-router-dom"
import { Home, About, Works, Contact, Articles, Error } from '../pages'


const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works" element={<Works />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default Routing