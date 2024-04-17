import { useContext } from "react"
import { Link } from "react-router-dom"
import { useDisclosure } from "@mantine/hooks"
import { Drawer, Button, Divider } from "@mantine/core"

import { CgMenuRightAlt } from "react-icons/cg"

import { WindowsSize } from "../App"
import SocialMedia from "./SocialMedia"
import MyForm from "./Formspree"

function Navbar() {
  const [ContactOpened, ContactHadler] = useDisclosure(false)
  const [MenuOpened, MenuHandler] = useDisclosure(false)

  const winsiz = useContext(WindowsSize)

  return (
    <>
      <header className="w-[100%] backdrop-blur-xl sticky absolute top-0 z-[210]">
        <nav className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto py-3">
          <div className="flex justify-between items-center px-5 lg:p-0 ">
            <div>
              <Link to={"/"} className=" text-xl font-bold">
                Imam.
              </Link>
            </div>
            <div>
              <ul className="gap-x-10 hidden lg:flex">
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/projects"}>Projects</Link>
                </li>
                <li>
                  <Link to={"/design"}>Design</Link>
                </li>
              </ul>
            </div>
            <div className="hidden lg:block">
              <Button color="black" radius="xl" onClick={ContactHadler.open}>
                Contact
              </Button>
            </div>
            <div className="lg:hidden">
              <CgMenuRightAlt
                className="w-8 h-auto"
                onClick={MenuHandler.open}
              />
            </div>
          </div>
        </nav>
      </header>

      <Drawer
        zIndex={210}
        offset={8}
        radius="md"
        opened={ContactOpened}
        position="right"
        onClose={ContactHadler.close}
        size="lg"
        title="Contact"
        hidden={winsiz < 1024 ? true : false}
        overlayProps={{ backgroundOpacity: 0.5, blur: 1 }}>
        <div className="flex flex-col justify-between h-full">
          <div>
            <MyForm />
          </div>
          <div>
            <Divider
              my="xs"
              label={<span className="text-sm">Let's connect!</span>}
              labelPosition="center"
            />
            <SocialMedia formSpree={false} />
          </div>
        </div>
      </Drawer>

      <Drawer
        zIndex={220}
        opened={MenuOpened}
        position="right"
        onClose={MenuHandler.close}
        size={winsiz <= 768 ? "xs" : "md"}
        title={
          <div>
            <h1 className="font-bold text-base">Imam Maulana</h1>
            <p className="text-[0.89rem]">Let's work together!</p>
          </div>
        }
        hidden={winsiz >= 1024 ? true : false}
        overlayProps={{ backgroundOpacity: 0.5, blur: 1 }}>
        <Divider />
        <div className="flex flex-col justify-between h-[80vh]">
          <ul className="flex flex-col all pt-5 w-full [&>*]:py-3 [&>*]:pl-4 text-2xl mb-10">
            <Link
              className="w-full hover:bg-gray-300"
              to={"/"}
              onClick={MenuHandler.close}>
              <li>Home</li>
            </Link>
            <Link
              to={"/about"}
              className="w-full hover:bg-gray-300"
              onClick={MenuHandler.close}>
              <li>About</li>
            </Link>
            <Link
              to={"/projects"}
              className="w-full hover:bg-gray-300"
              onClick={MenuHandler.close}>
              <li>Projects</li>
            </Link>
            <Link
              to={"/design"}
              className="w-full hover:bg-gray-300"
              onClick={MenuHandler.close}>
              <li>Design</li>
            </Link>
          </ul>
          <div>
            <Divider
              my="xs"
              label={<span className="text-sm">Contact</span>}
              labelPosition="center"
            />
            <SocialMedia />
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default Navbar
