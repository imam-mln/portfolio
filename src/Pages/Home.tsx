import { Helmet, HelmetProvider } from "react-helmet-async"
import { Image, Mark, Overlay, Skeleton } from "@mantine/core"
import { Suspense, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { motion } from "framer-motion"

import ImamV1 from "../assets/imam-1.png"

function Home() {
  const fadeInSlideVariants = {
    hidden: {
      opacity: 0,
      y: 40, // Atur pergerakan horizontal sesuai kebutuhan
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Atur durasi transisi sesuai kebutuhan
        delay: 0.3, // Atur delay sesuai kebutuhan
      },
    },
  }

  const location = useLocation().pathname
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
          <title>Imam | Portfolio</title>
        </Helmet>
      </HelmetProvider>
      <main id="home">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInSlideVariants}
          className="flex flex-row-reverse lg:flex-row items-center mx-auto max-w-6xl justify-around">
          {/* TEXT */}
          <div className="z-20 text-center md:text-start absolute md:static">
            <div className="hidden md:block">
              <p>
                Hello there 👋 <br className="md:hidden" />I am{" "}
                <Mark color="black">
                  <span className="px-1 text-white font-bold">
                    Imam Maulana
                  </span>
                </Mark>
              </p>
              <h1 className="hidden md:block *:mt-2 mb-4 leading-none text-[40px] lg:text-6xl xl:text-7xl font-bold">
                Frontend Web <br /> Developer
              </h1>
            </div>

            <div className="md:hidden">
              <p className="text-slate-200">
                Hello there 👋 <br />I am{" "}
                <span className="font-bold text-white">Imam Maulana</span>
              </p>
              <h1 className="hidden md:block *:mt-2 mb-4 leading-none text-[40px] lg:text-6xl xl:text-7xl font-bold">
                Frontend Web <br /> Developer
              </h1>
            </div>

            <h1 className="pt-2 md:hidden mt-2 mb-4 leading-none text-[40px] lg:text-6xl xl:text-7xl font-bold text-white">
              <p className="pb-5">
                <Mark color="black">
                  <span className="text-white">Frontend Web</span>
                </Mark>
              </p>
              <p>
                <Mark color="black">
                  <span className="text-white">Developer</span>
                </Mark>
              </p>
            </h1>

            <p className="hidden md:block max-w-md text-xs lg:text-base lg:max-w-lg">
              Always enthusiastic and challenged to learn new things. <br />
              Let's build something great with me!
            </p>
          </div>

          {/* IMAGE */}
          <div className="group filter grayscale hover:filter-none transition ease-in-out duration-1000">
            <Suspense
              fallback={<Skeleton visible={true} height={700} width={400} />}>
              <div className="z-10 m-auto">
                <Image
                  className="pt-6 md:pt-0 h-[95vh] md:h-full"
                  src={ImamV1}
                  alt="Imam"
                />
              </div>
            </Suspense>
          </div>
        </motion.div>
      </main>
      <Overlay
        gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.7) 10%, rgba(0, 0, 0, 0) 70%)"
        opacity={0.85}
        className="md:hidden"
      />
    </>
  )
}

export default Home
