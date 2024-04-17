import { useContext } from "react"
import { Modal } from "@mantine/core"
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6"
import { FiGithub } from "react-icons/fi"
import { useDisclosure } from "@mantine/hooks"

import { WindowsSize } from "../App"

import MyForm from "./Formspree"

interface Data {
  formSpree?: boolean
}

function SocialMedia({ formSpree = true }: Data) {
  const [opened, { open, close }] = useDisclosure(false),
    winsiz = useContext(WindowsSize)
  return (
    <>
      <div className="flex justify-evenly">
        <a
          className="text-white bg-black rounded-full p-2 md:p-3"
          href="https://www.linkedin.com/in/imammay24/"
          target="_blank">
          <FaLinkedinIn className="w-5 xl:w-7 h-auto" />
        </a>
        <a
          className="text-white bg-black rounded-full p-2 md:p-3"
          href="https://www.instagram.com/imm.mln/"
          target="_blank">
          <FaInstagram className="w-5 xl:w-7 h-auto" />
        </a>
        <a
          className="text-white bg-black rounded-full p-2 md:p-3"
          target="_blank"
          href="https://github.com/imam-mln">
          <FiGithub className="w-5 xl:w-7 h-auto" />
        </a>
      </div>
      {formSpree ? (
        <div className="flex justify-center pt-5">
          <button
            className="bg-black w-[12.5rem] md:w-[17rem] md:py-1 text-white rounded-full"
            onClick={open}>
            Let's Talk!
          </button>
        </div>
      ) : (
        ""
      )}

      <Modal
        zIndex={225}
        opened={opened}
        onClose={close}
        hidden={winsiz >= 1024 ? true : false}>
        <MyForm />
      </Modal>
    </>
  )
}

export default SocialMedia
