import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import { client } from './apolloConfig'
import './i18n'
import './assets/main.css'
import App from './components/App'

const renderApp = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  )
}

render(renderApp(), document.getElementById('app'))
