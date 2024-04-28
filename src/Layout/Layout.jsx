import Routing from '../routes/Routing'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <section className='md:flex'>
        <Navbar />
        <main className='w-full'>
          <Routing />
        </main>
    </section>
  )
}

export default Layout