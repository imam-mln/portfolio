import { Helmet, HelmetProvider } from "react-helmet-async"
import { useLocation } from "react-router-dom"
import { useEffect, useContext } from "react"
import { Badge, Card, Tooltip } from "@mantine/core"
import { motion } from "framer-motion"

import { MdLocationPin } from "react-icons/md"

import { WindowsSize } from "../App.tsx"

import Imam from "../assets/imam-2.png"

import { Experiences } from "../Datas/experiences.ts"
import { Projects } from "../Datas/projects.ts"
import { Design } from "../Datas/design.ts"
import { SkillSet } from "../Datas/skill-set.ts"

import CardStatus from "../Components/CardStatus.tsx"
import ExperiencesModal from "../Components/Experiences.tsx"
import ButtonScrollTop from "../Components/ButtonScrollTop.tsx"

function About() {
  const location = useLocation().pathname,
    winSize = useContext(WindowsSize)
  window.scrollTo(0, 0)
  useEffect(() => {
    location === "/"
      ? document.body.classList.add("overflow-y-hidden")
      : document.body.classList.remove("overflow-y-hidden")
  })
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Imam | About</title>
        </Helmet>
      </HelmetProvider>

      {/* CONTENT */}
      <main className="pt-5 ">
        {/* BUTTON SCROLL TOP */}
        <ButtonScrollTop />
        {/* ABOUT */}
        <div
          className={`md:gap-y-10 md:pt-3 xl:gap-y-0 max-w-6xl mx-auto flex xl:flex-row flex-col-reverse`}>
          {/* SIDEBAR LEFT */}
          <motion.div
            initial={
              winSize < 1284
                ? {
                    opacity: 0,
                    y: 40,
                  }
                : { opacity: 0, x: -20 }
            }
            animate={
              winSize < 1284
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 1,
                    x: 0,
                  }
            }
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="xl:max-w-md mx-auto">
            <Card shadow="sm" w={"100%"} padding="lg" radius="md" withBorder>
              <div className="flex flex-col md:flex-row gap-x-12 gap-y-5 items-center xl:gap-x-0 xl:block">
                <img
                  className={`group rounded-full size-44 md:size-52 grayscale hover:bg-yellow-400 hover:grayscale-0 transition duration-500 ease-in-out xl:mb-5 mx-auto`}
                  src={Imam}
                  alt="Imam"
                />
                <div className="text-justify md:hidden max-w-xs text-sm md:text-xl xl:text-2xl ">
                  <p className="text-slate-500 text-center">About me?</p>
                  <p className="font-semibold">
                    &emsp;&emsp;Someone who is interested in becoming Web
                    Developer and Network Engineer. Moreover, I always like to
                    learn about the current technologies that are popular. Love
                    to learn!
                  </p>
                </div>
                <div className="flex flex-col gap-y-2 text-sm md:text-base">
                  <div>
                    <p className="font-semibold">Nationality :</p>
                    <div>
                      <a
                        className="w-fit group flex items-center"
                        href="https://en.wikipedia.org/wiki/Indonesia"
                        target="_blank">
                        <p className="group-hover:text-blue-500 group-hover:underline">
                          Indonesia (id-ID)
                        </p>

                        <div
                          className="ml-1 w-5 h-5 rounded-full border-2 border-slate-400"
                          style={{
                            background: "linear-gradient(#fe0000 50%, #fff 0)",
                          }}></div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">Recent education :</p>
                    <a
                      target="_blank"
                      className="w-fit inline-flex hover:underline hover:text-blue-500 items-center"
                      href="https://maps.app.goo.gl/asQG8qiQqjKB8Lj68">
                      Bachelor Degree - STMIK IKMI Cirebon
                      <p>
                        <MdLocationPin className="w-[2.5vh] h-auto" />
                      </p>
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold">Interest :</p>
                    <div className="flex flex-wrap max-w-xs gap-1">
                      <Badge size="md" color="blue">
                        Web Dev
                      </Badge>
                      <Badge size="md" color="darkgreen">
                        Network
                      </Badge>
                      <Badge size="md" color="violet">
                        IoT
                      </Badge>
                      <Badge size="md" color="teal">
                        IT
                      </Badge>
                      <Badge size="md" color="grape">
                        Tech
                      </Badge>
                      <Badge size="md" color="darkblue">
                        Graphic Design
                      </Badge>
                      <Badge size="md" color="maroon">
                        Movies
                      </Badge>
                    </div>
                  </div>
                  <div className="xl:hidden pt-3">
                    <ExperiencesModal sz="lg" tb="Experiences" />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
          {/* DESCRIPTION */}
          <div className="flex flex-col xl:pl-14 max-w-xs md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto justify-around">
            {/* ABOUT */}
            <motion.div
              initial={{
                opacity: 0,
                y: -40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
              className="text-center hidden md:block">
              <p className="text-slate-500">About me?</p>
              <p className="text-xl xl:text-2xl font-semibold">
                Someone who is interested in becoming Web Developer and Network
                Engineer. Moreover, I always like to learn about the current
                technologies that are popular. <br />
                Love to learn!
              </p>
            </motion.div>
            {/* CARD EXP, PROJECT, DESIGN */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.4,
              }}
              className="hidden xl:flex justify-between md:gap-x-3">
              {/* EXPERIENCES */}
              <div>
                <CardStatus title="Experiences" data={Experiences} exp={true} />
              </div>
              {/* PROJECTS */}
              <div>
                <CardStatus title="Projects" data={Projects} to="/projects" />
              </div>
              {/* DESIGN */}
              <div>
                <CardStatus title="Design" data={Design} to="/design" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* TOOLS USAGE */}
        <div className="pt-20 pb-14">
          <div className="max-w-6xl mx-auto flex justify-between">
            <div className="max-w-5xl xl:max-w-6xl m-auto">
              <motion.div
                initial={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
                whileInView={{ opacity: 1 }}
                className="text-center text-xl md:text-3xl font-bold pb-7">
                <p>Tools usage</p>
              </motion.div>
              <div className="grid grid-cols-4 md:grid-cols-7 lg:grid-cols-8 gap-4 justify-center">
                {SkillSet.map((skill, i) => {
                  return (
                    <Tooltip
                      key={i}
                      withArrow
                      ta={"center"}
                      color="black"
                      transitionProps={{ duration: 200 }}
                      label={<span className="py-4">{skill.name}</span>}>
                      <motion.a
                        initial={
                          winSize < 1284
                            ? { opacity: 0, y: -30 }
                            : { opacity: 0, x: -100 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: 0.3,
                        }}
                        whileInView={
                          winSize < 1284
                            ? { opacity: 1, y: 0 }
                            : { opacity: 1, x: 0 }
                        }
                        href={skill.link}
                        target="_blank">
                        <div className="hover:bg-black rounded-md w-fit flex text-white bg-neutral-500 p-5">
                          <skill.icon className="w-[8vw] md:w-[6vw] h-auto" />
                        </div>
                      </motion.a>
                    </Tooltip>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default About
