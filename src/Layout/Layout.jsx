import Routing from '../routes/Routing'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <section className='flex'>
        <Navbar />
        <div className='w-full'>
          <Routing />
        </div>
    </section>
  )
}

export default Layout