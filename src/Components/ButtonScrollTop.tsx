import { Affix, Transition } from "@mantine/core"
import { useWindowScroll } from "@mantine/hooks"

import { MdArrowUpward } from "react-icons/md"

function ButtonScrollTop() {
  const [scroll, scrollTo] = useWindowScroll()
  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <button
            className="p-3 bg-black rounded-full"
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}>
            <MdArrowUpward className="w-7 md:w-10 h-auto fill-white" />
          </button>
        )}
      </Transition>
    </Affix>
  )
}

export default ButtonScrollTop
