import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Block } from 'components'

const Wrapper = styled(Block)``

const Hero = () => {
  return (
    <Wrapper id="Hero" className="h-72"> Hero </Wrapper>
  )
}

// Hero.propTypes = {
//   children: PropTypes.any,
// }

export { Hero }
