import styled from 'styled-components'

const Wrapper = styled.div.attrs((props) => ({
  className: (
    `
      ${props.className}
    `
  ),
}))`
  height: 100vh;
  background-image: linear-gradient(-225deg, #6e68b1 0%, #575e98 100%);
`

const Hero = styled.div.attrs((props) => ({
  className: (
    `
      ${props.className}
    `
  ),
}))`
`
const Header = styled.div.attrs((props) => ({
  className: (
    `
      ${props.className}
    `
  ),
}))`
`
const Content = styled.div.attrs((props) => ({
  className: (
    `
      ${props.className}
    `
  ),
}))`
`
const Footer = styled.div.attrs((props) => ({
  className: (
    `
      ${props.className}
    `
  ),
}))`
`

export {
  Wrapper, Hero, Header, Content, Footer,
}
