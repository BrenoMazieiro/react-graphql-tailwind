import React from 'react'
import PropTypes from 'prop-types'
// import { CheckLoggedInn } from 'utils'
import {
  PageTemplate, Header, Hero, HomeContent, Footer,
} from 'components'

const HomePage = ({
  // t,
  // i18n,
  idPage,
}) => {
  return (
    <PageTemplate
      idPage={idPage}
      hero={<Hero />}
      header={<Header />}
      content={<HomeContent />}
      footer={<Footer />}
    />
  )
}

HomePage.propTypes = {
  idPage: PropTypes.string.isRequired,
  // t: PropTypes.func.isRequired,
  // i18n: PropTypes.object.isRequired,
}

export { HomePage }
