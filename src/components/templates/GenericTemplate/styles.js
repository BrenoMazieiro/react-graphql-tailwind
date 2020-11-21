import styled from 'styled-components'
import { Block } from 'components'

const Wrapper = styled.div.attrs(() => ({
  className: (
    `
      bg-white
      dark:bg-black
    `
  ),
}))`
  height: 100vh;
`

export { Wrapper }
