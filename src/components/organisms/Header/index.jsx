import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Block } from 'components'

const Wrapper = styled(Block)``

const Header = () => {
  return (
    <Wrapper id="Headers" className="h-10"> Header </Wrapper>
  )
}

// Header.propTypes = {
//   children: PropTypes.any,
// }

export { Header }
