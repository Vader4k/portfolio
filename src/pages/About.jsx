import { Link } from "react-router-dom"
import Button from "../components/Button"


const About = () => {
  return (
    <section className="w-full flex items-start justify-center gap-4">
      <div className="mt-[10%] w-full font-Montserrat">
        <h1 className="h1 text-[18rem] leading-[23rem]">About</h1>
        <h2 className="h1 text-[2.5rem]">I{"'"}m, Daniel. A developer, <br /> reader and problem solver.</h2>
        <p className="my-6 text-[0.9rem] max-w-[600px] leading-6">
          With an unwavering passion for technology and curiosity about how computers operate, I embarked on a journey that led me to become a skilled web developer with two years of experience.
          Now i have found my passion in creating digital experiences on the web.
        </p>

        <p className="py-6 text-[0.9rem] max-w-[600px] leading-6">
          College gave me a strong foundation in computer science, but the real learning came from doing. I love the challange of taking an idea and turning it into something real with code. Every line i write, i try to make it clean and efficient, something that goes above and beyond what{"'"}s expected.
        </p>

        <p className="py-6 text-[0.9rem] max-w-[600px] leading-6">
          Outside of coding, i{"'"}m a big reader. Books help me see the world from new perspectives and give me ideas for my work. When i{"'"}m not coding or reading, you can probably find me lost in a video game or movie. These are more than just extertainment for me - they{"'"}re stories, puzzles, and testaments to what people can create.
        </p>
        <p className="py-6 text-[0.9rem] max-w-[600px] leading-6">
          Being a web developer is all about learning and growinf. Everyday is a chance to get better and try new things. My goal is to build awesome stuff that works not just today, but for the future too.
          There will be bumps in the road, but i{"'"}m always up for a challange. For me, success isn{"'"}nt just about end result - it{"'"}s about the journey. Constantly learning, getting better, and pushing my limits one line of code at a time.
        </p>

        <p className="py-6">
          This is one of my favorite qoutes (by shuri:)
        </p>

        <h1 className="h1 text-[2.5rem] max-w-[500px] my-6">
          {'"'}How many times do I have to teach you, just because something works doesn’t mean it can’t be improved{'"'}
        </h1>

        <p className="py-4 text-[0.9rem] max-w-[600px] leading-6">
          This resonates deeply with me because i believe a good programmer should{"'"}nt be attached to his code but see code as a tool to fix a problem and should always be ready to rewrite or discard his code if it cant solve a problem!
        </p>


        <h1 className="h1 text-[1.5rem] py-8 tracking-widest">EXPERIENCE</h1>
        <ul className="text-[0.9rem] leading-6 max-w-[550px]">
          <li>- Degree in Computer Science</li>
          <li>- 4 years programming experience, Web Development, Marketing and Product Research</li>
        </ul>

        <p className="text-[0.9rem] py-8">Within those 4 years, i have worked with:</p>
        <ul className="text-[0.9rem] leading-6">
          <li>- Healthstacks as a Fronten Web Developer</li>
          <li>- Baicart as a Product Researcher</li>
          <li>- Thrive7 Groups as a Frontend Web Developer</li>
          <li>- Jaluso Energy as a Web Administrator</li>
        </ul>

        <h1 className="h1 text-[1.5rem] py-10 tracking-widest">SKILLS</h1>
        <div className="max-w-[600px] leading-6 text-[0.9rem]">
          Product Research / HTML / CSS / JavaScript / React / Bootstrap / Tailwind / Framer Motion / SCSS / Strapi / Wordpress / Notion / Redux / Vite / Netlify / Vercel
        </div>

        <Button text="My CV" path="https://docs.google.com/document/d/1u77out_Srn5qkwXgBo-l66618edQwWEJ2LO381OpwqE/edit"/>

        <div className="py-8">
          <h1 className="h1 text-[1.5rem] text-text-50 py-8">KUDOS</h1>
          <div className="text-[0.9rem] leading-6 max-w-[600px]">
            Some of the works in my portfolio  were inspired by a few friends who helped smoothen my programing journey a bit. Some projects are collaborations with one or two people but i have only included works that i had a large contribution to, whether it{"'"}s design, idea, process, engineering or creative directions.
            The following people have influenced my growth and career path massively: <Link className="underline hover:line-through transition-all">Onyedika</Link>, <Link  className="underline hover:line-through transition-all">Striker</Link>, <Link className="underline hover:line-through transition-all">Jesse</Link>, <Link className="underline hover:line-through transition-all">Emzor</Link>. <span>THANK YOU.</span>
          </div>

          <Button text="Contact me" path='/contact'/>
        </div>
      </div>

      <div className="mt-[10%] w-full">
        image
      </div>
    </section>
  )
}

export default About