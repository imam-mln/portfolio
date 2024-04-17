import { Helmet, HelmetProvider } from "react-helmet-async"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { Card, Overlay, Tooltip } from "@mantine/core"
import { useHover } from "@mantine/hooks"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { motion } from "framer-motion"

import { Projects as MyProjects } from "../Datas/projects"
import ButtonScrollTop from "../Components/ButtonScrollTop.tsx"
import NoCover from "../assets/Projects/project-no-cover.jpg"

function Projects() {
  // window.scrollTo(0, 0)
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
              const { hovered, ref } = useHover()
              return (
                <Card
                  ref={ref}
                  key={i}
                  shadow="sm"
                  padding="0"
                  radius="sm"
                  withBorder
                  className="group">
                  <div className="relative">
                    {hovered ? (
                      <Overlay color="#f0f0f0" backgroundOpacity={0.8} center>
                        <div className="text-center ">
                          <div className="text-base lg:text-xl xl:text-2xl font-semibold">
                            <p>{project.title}</p>
                          </div>
                          <div className="px-5 text-xs lg:text-sm xl:text-base">
                            <p>{project.desc}</p>
                          </div>
                          <div className="flex gap-2 justify-center py-3">
                            {project.tools.map((tool, i) => {
                              return (
                                <span
                                  key={i}
                                  className="bg-black text-white text-[0.5rem] md:text-xs px-1 xl:px-2 xl:py-1 rounded-sm">
                                  {tool}
                                </span>
                              )
                            })}
                          </div>
                          <div>
                            <p className="xl:text-base md:text-sm text-xs">
                              Available on :
                            </p>
                            <div className="flex justify-center gap-2">
                              {project.link.map((el, i) => {
                                return (
                                  <Tooltip
                                    key={i}
                                    label={el.media}
                                    transitionProps={{
                                      transition: "fade-down",
                                      duration: 300,
                                    }}
                                    position="bottom">
                                    <a
                                      className="p-1 xl:p-2 bg-black text-white rounded-full"
                                      target="_blank"
                                      href={el.link}>
                                      <el.icon />
                                    </a>
                                  </Tooltip>
                                )
                              })}
                            </div>
                          </div>
                        </div>
                      </Overlay>
                    ) : (
                      ""
                    )}
                    {project.img !== undefined ? (
                      <LazyLoadImage
                        src={project.img}
                        alt={project.title}
                        // effect="blur"
                        height={400}
                        width={700}
                      />
                    ) : (
                      <div className="relative">
                        <img
                          className="invisible"
                          src={NoCover}
                          alt={project.title}
                        />
                        <div className="absolute top-0 flex flex-col w-full h-full justify-center items-center text-3xl font-bold text-slate-500">
                          <p>Project</p>
                          <p>{project.title}</p>
                          <p>Has No Cover </p>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              )
            })}
          </motion.div>
        </div>
      </main>
    </>
  )
}

export default Projects
