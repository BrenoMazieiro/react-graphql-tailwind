import styled from 'styled-components'

const Wrapper = styled.div.attrs((props) => ({
  className: (
    `
      ${props.className}
    `
  ),
}))``

export { Wrapper }
