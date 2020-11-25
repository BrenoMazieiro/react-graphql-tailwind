import React from 'react'
import PropTypes from 'prop-types'
import {
  Wrapper,
  Hero,
  Content,
  Header,
  Footer,
} from './styles'

const PageTemplate = ({
  idPage, hero, header, content, footer,
}) => {
  return (
    <Wrapper className="flex flex-col" id={idPage}>
      <Header className="bg-gray-700">{header}</Header>
      <Hero className="bg-red-700">{hero}</Hero>
      <Content className="bg-blue-700">{content}</Content>
      <Footer className="bg-green-700">{footer}</Footer>
    </Wrapper>
  )
}

PageTemplate.propTypes = {
  idPage: PropTypes.string.isRequired,
  hero: PropTypes.node.isRequired,
  header: PropTypes.node.isRequired,
  content: PropTypes.any.isRequired,
  footer: PropTypes.node.isRequired,
}

export { PageTemplate }
