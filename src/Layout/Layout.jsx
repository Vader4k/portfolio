import Routing from '../routes/Routing'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <section className='bg-bg-50 flex gap-10'>
        <Navbar />
        <div className='w-full px-52'>
          <Routing />
        </div>
    </section>
  )
}

export default Layout