import { Helmet, HelmetProvider } from "react-helmet-async"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { motion } from "framer-motion"

import { Projects as MyProjects } from "../Datas/projects"
import ButtonScrollTop from "../Components/ButtonScrollTop.tsx"
import ProjectCard from "../Components/ProjectCard.tsx"

function Projects() {
  window.scrollTo(0, 0)
  const location = useLocation().pathname
  // console.log(winSize)

  useEffect(() => {
    location === "/"
      ? document.body.classList.add("overflow-y-hidden")
      : document.body.classList.remove("overflow-y-hidden")
  })
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Imam | Projects</title>
        </Helmet>
      </HelmetProvider>
      <main>
        <ButtonScrollTop />
        <div className="md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto pt-3 pb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="text-center pb-6 uppercase">
            <h1 className="text-xl md:text-3xl font-bold">
              My Recent Projects
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="grid sm:grid-cols-2 px-5 lg:px-0 gap-5 justify-around">
            {MyProjects.map((project, i) => {
              return <ProjectCard project={project} key={i} />
            })}
          </motion.div>
        </div>
      </main>
    </>
  )
}

export default Projects
