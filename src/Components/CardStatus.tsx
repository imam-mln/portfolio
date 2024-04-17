import { Card, RingProgress, Text, Button } from "@mantine/core"
import { Link } from "react-router-dom"
import { Suspense, lazy, useContext } from "react"

import { WindowsSize } from "../App"

const ExperiencesModal = lazy(() => import("../Components/Experiences"))

interface CardStatus {
  exp?: boolean
  title: string
  data: object[]
  to?: string
}

function CardStatus({ title, data, to = "", exp = false }: CardStatus) {
  const winsiz = useContext(WindowsSize)
  return (
    <Card
      shadow="sm"
      w={winsiz < 1024 ? 180 : 210}
      padding="lg"
      radius="md"
      withBorder>
      <div className="pt-4">
        <Card.Section>
          <Text fz={winsiz < 1024 ? 15 : 20} fw={600} ta="center">
            {title}
          </Text>
        </Card.Section>
      </div>
      <div className="mx-auto py-4">
        <RingProgress
          sections={[{ value: 100, color: "yellow" }]}
          label={
            <Text
              c="yellow"
              fw={700}
              ta="center"
              size={winsiz < 1024 ? "25" : "40"}>
              {data.length}
            </Text>
          }
          size={winsiz < 1024 ? 80 : 120}
          thickness={winsiz < 1024 ? 6 : 12}
          roundCaps
        />
      </div>
      {exp === true ? (
        <Suspense>
          <ExperiencesModal />
        </Suspense>
      ) : (
        <Link to={to}>
          <Button
            color="grey"
            radius={"xl"}
            size={winsiz < 1024 ? "xs" : "md"}
            fullWidth>
            Detail
          </Button>
        </Link>
      )}
    </Card>
  )
}

export default CardStatus
