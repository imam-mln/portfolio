import { useDisclosure } from "@mantine/hooks"
import { Modal, Button } from "@mantine/core"
import { useContext } from "react"

import { WindowsSize } from "../App.tsx"

import { Experiences } from "../Datas/experiences.ts"

interface Data {
  tb?: string
}

export default function ExperiencesModal({ tb = "Detail" }: Data) {
  const [opened, { open, close }] = useDisclosure(false),
    winsiz = useContext(WindowsSize)

  return (
    <>
      <Modal
        zIndex={220}
        size={"xl"}
        opened={opened}
        title={
          <span className="w-full text-lg md:text-2xl font-semibold">
            Experiences
          </span>
        }
        onClose={close}>
        <div className="pt-2 pb-7">
          {Experiences.map((exp, i) =>
            i % 2 === 0 ? (
              <div key={i} className="pl-5 py-3 bg-slate-200">
                <div className="flex flex-col md:flex-row text-base md:text-xl font-semibold justify-between md:items-center">
                  <div className="flex">
                    <div>{exp.title}</div>
                    <div className="pl-1 text-slate-500">({exp.type})</div>
                  </div>
                  <div className="text-xs md:text-sm pr-5 font-normal">
                    {exp.start} - {exp.end}
                  </div>
                </div>
                <div className="text-sm md:text-base">{exp.company}</div>
              </div>
            ) : (
              <div key={i} className="pl-5 py-3">
                <div className="flex flex-col md:flex-row text-base md:text-xl font-semibold justify-between md:items-center">
                  <div className="flex">
                    <div>{exp.title}</div>
                    <div className="pl-1 text-slate-500">({exp.type})</div>
                  </div>
                  <div className="text-xs md:text-sm pr-5 font-normal">
                    {exp.start} - {exp.end}
                  </div>
                </div>
                <div className="text-sm md:text-base">{exp.company}</div>
              </div>
            )
          )}
        </div>
      </Modal>

      <Button
        fullWidth
        size={winsiz < 1024 ? "sm" : "md"}
        radius={"xl"}
        color="grey"
        onClick={open}>
        {tb}
      </Button>
    </>
  )
}
