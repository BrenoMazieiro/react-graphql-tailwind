import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import { HomePage } from 'components'

const Routes = ({
  t, i18n,
}) => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage idPage="homePage" t={t} i18n={i18n} />
      </Route>
    </Switch>
  )
}

Routes.propTypes = {
  t: PropTypes.func,
  i18n: PropTypes.object,
}

export default Routes
