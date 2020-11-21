import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './styles'

const Block = ({ children, className }) => {
  return (
    <Wrapper id="block" className={className}>
      {children}
    </Wrapper>
  )
}

Block.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
}

export { Block }
