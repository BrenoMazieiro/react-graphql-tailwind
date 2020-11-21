import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Block } from 'components'

import Routes from './Routes'

const Wrapper = styled(Block)``

const App = () => {
  const { t, i18n } = useTranslation()
  const themeType = localStorage.getItem('theme').substring(1, localStorage.getItem('theme').length-1)
  return (
    <Wrapper className={themeType}>
      <Routes
        t={t}
        i18n={i18n}
      />
    </Wrapper>
  )
}

export default App
