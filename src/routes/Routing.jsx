import { Routes, Route } from "react-router-dom"
import { Home, About, Works, Contact, Articles, Error,
  Healthstarks,
  Summarizer,
  Anonstore,
  Medicare,
  Hoobank,
  Friends,
  Socialcheap,
  Coinking,
  Dictionary
} from '../pages'


const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works" element={<Works />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/project/healthstarks" element={<Healthstarks />} />
        <Route path="/project/summarizer" element={<Summarizer />} />
        <Route path="/project/anon" element={<Anonstore />} />
        <Route path="/project/medicare" element={<Medicare />} />
        <Route path="/project/hoobank" element={<Hoobank />} />
        <Route path="/project/friends" element={<Friends />} />
        <Route path="/project/socialcheap" element={<Socialcheap />} />
        <Route path="/project/coinking" element={<Coinking />} />
        <Route path="/project/dictionary" element={<Dictionary />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default Routing