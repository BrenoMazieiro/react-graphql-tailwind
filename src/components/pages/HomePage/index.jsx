import React from 'react'
import PropTypes from 'prop-types'
// import { CheckLoggedInn } from 'utils'
import { PageTemplate, Block } from 'components'

const HomePage = ({
  // t,
  // i18n,
  idPage,
}) => {
  return (
    <PageTemplate
      idPage={idPage}
      sider={<Block >Sider</Block>}
      header={<Block >Header</Block>}
      content={<Block >Content</Block>}
      footer={<Block >Footer</Block>}
    />
  )
}

HomePage.propTypes = {
  idPage: PropTypes.string.isRequired,
  // t: PropTypes.func.isRequired,
  // i18n: PropTypes.object.isRequired,
}

export { HomePage }
