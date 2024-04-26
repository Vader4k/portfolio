import { Link } from "react-router-dom"


const Socialcheap = () => {
  return (
    <section className="w-full h-full bg-bg-50 text-text-50 pr-[8%] font-Montserrat text-[0.89rem]">
      <div className="w-full h-full flex flex-col items-center justify-center gap-16">
        <h1 
              className="h1 text-[13rem] bg-text-50 text-bg-50 h-[95vh] pt-[30rem] mb-10 text-center w-full"
            >
              Socialcheap
          </h1>

          <div className="max-w-[800px]">
              <h1 className="h1 text-[2.5rem]">
                A website where you can buy numbers to receive text messages for almost any service
              </h1>

              <div className="flex w-full justify-between items-start py-10">
                <div className="max-w-[150px]">
                  <h1 className="uppercase text-[1rem] font-medium border-b border-black w-fit">Role</h1>
                  <p className="pt-4">Website Design and web development</p>
                </div>
                <div className="max-w-[300px]">
                  <h1 className="uppercase text-[1rem] font-medium border-b border-black w-fit">Responsibilities</h1>
                  <div className="pt-4">
                    website design, Frontend Engineering, SEO, collaborating with a backend developer
                  </div>
                </div>
                <div>
                  <h1 className="uppercase text-[1rem] font-medium border-b border-black w-fit">URL</h1>
                  <Link to='https://socialcheap.shop/' target="_blank">
                    <p className="pt-4 hover:border-b border-black transition-all">https://socialcheap.shop</p>
                  </Link>
                </div>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Socialcheap