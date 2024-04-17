import { IconType } from "react-icons"
import { Card, Overlay, Tooltip, Loader } from "@mantine/core"
import { useHover } from "@mantine/hooks"
import { LazyLoadImage } from "react-lazy-load-image-component"

import NoCover from "../assets/Projects/project-no-cover.jpg"

interface Link {
  media: string
  link?: string
  icon: IconType
}

interface Datas {
  title: string
  desc: string
  img?: string
  link: Link[]
  tools: string[]
}

interface Data {
  project: Datas
}

export default function ProjectCard({ project }: Data) {
  const { hovered, ref } = useHover()
  return (
    <Card
      ref={ref}
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
            width={600}
            height={400}
            src={project.img}
            alt={project.title}
            placeholder={
              <span className="w-full h-full flex justify-center items-center">
                <Loader color="gray" size="xl" type="dots" />
              </span>
            }
          />
        ) : (
          <div className="relative">
            <img className="invisible" src={NoCover} alt={project.title} />
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
}
