import { Loader } from "@mantine/core"

export default function Loading() {
  return (
    <div className="min-w-full min-h-screen flex justify-center items-center">
      <Loader color="gray" size={100} />
    </div>
  )
}
