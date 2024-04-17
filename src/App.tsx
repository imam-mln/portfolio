import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { MantineProvider } from "@mantine/core"
import { lazy, Suspense, useState, createContext, useEffect } from "react"

export const WindowsSize = createContext(0)

import Navbar from "./Components/Navbar"
import Loading from "./Components/Loader"

const Home = lazy(() => import("./Pages/Home"))
const About = lazy(() => import("./Pages/About"))
const Design = lazy(() => import("./Pages/Design"))
const Projects = lazy(() => import("./Pages/Projects"))
const NotFound = lazy(() => import("./Pages/NotFound"))

const theme = {
  fontFamily: "Poppins, sans-serif",
}

function App() {
  const [winSize, setWinSize] = useState(window.innerWidth)

  useEffect(() => {
    const updateFavicon = () => {
      const isDarkMode =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      const favicon = document.getElementById(
        "favicon"
      ) as HTMLLinkElement | null

      if (favicon) {
        favicon.href = isDarkMode
          ? "/logo-imam-light.svg"
          : "/logo-imam-dark.svg"
      }
    }

    updateFavicon() // Pembaruan saat komponen dimuat

    // Daftarkan listener untuk pembaruan tema
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", updateFavicon)

    updateFavicon() // Pembaruan saat komponen dimuat

    // Daftarkan listener untuk pembaruan tema
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", updateFavicon)

    window.onresize = () => {
      setWinSize(window.innerWidth)
      // console.log("height: ", window.innerHeight, "px")
      // console.log("width: ", window.innerWidth, "px")
    }
  })

  return (
    <>
      <MantineProvider theme={theme}>
        <WindowsSize.Provider value={winSize}>
          {/* <div>{winSize}</div> */}
          <Router>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <Suspense fallback={<Loading />}>
                    <Home />
                  </Suspense>
                }
              />
              <Route
                path="/about"
                element={
                  <Suspense fallback={<Loading />}>
                    <About />
                  </Suspense>
                }
              />
              <Route
                path="/design"
                element={
                  <Suspense fallback={<Loading />}>
                    <Design />
                  </Suspense>
                }
              />
              <Route
                path="/projects"
                element={
                  <Suspense fallback={<Loading />}>
                    <Projects />
                  </Suspense>
                }
              />
              <Route
                path="*"
                element={
                  <Suspense fallback={<Loading />}>
                    <NotFound />
                  </Suspense>
                }
              />
            </Routes>
          </Router>
        </WindowsSize.Provider>
      </MantineProvider>
    </>
  )
}

export default App
