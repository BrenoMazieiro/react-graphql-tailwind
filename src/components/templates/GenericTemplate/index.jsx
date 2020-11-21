import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './styles'

const GenericTemplate = ({ children }) => {
  return (
    <Wrapper id="GenericTemplate">
      {children}
    </Wrapper>
  )
}

GenericTemplate.propTypes = {
  children: PropTypes.any,
}

export { GenericTemplate }
