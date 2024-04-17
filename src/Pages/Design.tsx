import { Helmet, HelmetProvider } from "react-helmet-async"
import { useLocation } from "react-router-dom"
import { useEffect, useState, lazy, Suspense, useContext } from "react"
import { Loader, Grid, Card, Button, Overlay } from "@mantine/core"
import { motion } from "framer-motion"

import { WindowsSize } from "../App"

import { Design as MyDesign } from "../Datas/design"
const MyCarousel = lazy(() => import("../Components/Carousel"))

function Design() {
  window.scrollTo(0, 0)
  const location = useLocation().pathname
  const [active, setActive] = useState(0)
  const winSize = useContext(WindowsSize)

  useEffect(() => {
    location === "/"
      ? document.body.classList.add("overflow-y-hidden")
      : document.body.classList.remove("overflow-y-hidden")
  })
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Imam | Design</title>
        </Helmet>
      </HelmetProvider>
      <main>
        <div className="md:max-w-4xl xl:max-w-6xl mx-auto px-5">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="text-center pb-5 text-2xl xl:text-3xl pt-2 font-bold uppercase">
            <h1>My Design</h1>
          </motion.div>
          {/* CONTENT */}
          <Grid justify="center">
            {/* DESIGNS PICKER */}
            <Grid.Col span={{ sm: "content" }} order={{ base: 3, lg: 1 }}>
              <motion.div
                initial={
                  winSize < 1284
                    ? { opacity: 0, x: 60 }
                    : { opacity: 0, x: -60 }
                }
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
                className="flex lg:flex-col justify-center flex-wrap gap-3">
                {MyDesign.map((el, i) => {
                  return (
                    <Card
                      key={i}
                      withBorder
                      className={`w-[18vw] sm:w-[6rem] md:w-[6.32rem] xl:w-[6.4rem]`}
                      padding={0}>
                      <div
                        className="h-auto w-fit text-center"
                        onClick={() => {
                          setActive(i)
                        }}>
                        <img
                          src={el.img[0]}
                          alt={el.title}
                          className="w-80"
                          loading="lazy"
                        />
                        {active === i ? (
                          <Overlay color="#000" backgroundOpacity={0.2} />
                        ) : (
                          ""
                        )}
                      </div>
                    </Card>
                  )
                })}
              </motion.div>
            </Grid.Col>
            {/* DESIGN PREVIEW */}
            <Grid.Col
              span={{ base: 12, sm: 6.5, lg: 7 }}
              order={{ base: 1, sm: 1, lg: 2 }}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}>
                <Suspense
                  fallback={
                    <div className="w-full h-96 flex justify-center items-center">
                      <Loader type="dots" color="gray" size="xl" />
                    </div>
                  }>
                  <MyCarousel
                    title={MyDesign[active].title}
                    img={MyDesign[active].img}
                  />
                </Suspense>
              </motion.div>
            </Grid.Col>
            {/* DESIGN DESCRIPTION */}
            <Grid.Col
              span={{ base: 12, sm: "auto" }}
              order={{ base: 2, sm: 2, lg: 3 }}>
              <motion.div
                initial={
                  winSize < 1284 ? { opacity: 0, y: 60 } : { opacity: 0, x: 60 }
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
                className="bg-gray-100 h-full p-3 flex justify-between flex-col sm:text-base text-xs">
                <div className="flex flex-col gap-3">
                  <h1 className="font-semibold sm:text-lg">Description</h1>
                  <div>
                    <h2 className="font-semibold">Title :</h2>
                    <p className="sm:text-sm">{MyDesign[active].title}</p>
                  </div>
                  <div>
                    <h2 className="font-semibold ">Summary :</h2>
                    <p className="sm:text-sm">{MyDesign[active].desc}</p>
                  </div>
                </div>
                <div className="mt-5 md:mt-0">
                  <Button
                    fullWidth
                    component="a"
                    href={MyDesign[active].link}
                    color="grey"
                    target="_blank">
                    Overview
                  </Button>
                </div>
              </motion.div>
            </Grid.Col>
          </Grid>
        </div>
      </main>
    </>
  )
}

export default Design
