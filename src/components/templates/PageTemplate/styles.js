import styled from 'styled-components'
import { Block } from 'components'

const Wrapper = styled(Block).attrs(() => ({
  className: (
    `
      bg-white
      dark:bg-black
    `
  ),
}))`
  height: 100vh;
`

const Sider = styled(Block)``
const Header = styled(Block)``
const Content = styled(Block)``
const Footer = styled(Block)``

export {
  Wrapper, Sider, Header, Content, Footer,
}
