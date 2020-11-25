import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Block } from 'components'

const Wrapper = styled(Block)``

const HomeContent = () => {
  return (
    <Wrapper id="HomeContent" className="h-96"> Content </Wrapper>
  )
}

// HomeContent.propTypes = {
//   children: PropTypes.any,
// }

export { HomeContent }
