import styled from 'styled-components'

const Wrapper = styled.div.attrs((props) => ({
  className: (
    `
      ${props.className}
      bg-white
      dark:bg-black
      text-black
      dark:text-white
    `
  ),
}))``

export { Wrapper }
