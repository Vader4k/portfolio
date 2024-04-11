import Routing from '../routes/Routing'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <section className='bg-bg-50 flex gap-10'>
        <Navbar />
        <Routing />
    </section>
  )
}

export default Layout