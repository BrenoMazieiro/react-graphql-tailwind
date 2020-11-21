import React from 'react'
import PropTypes from 'prop-types'
import {
  Wrapper,
  Sider,
  Content,
  Header,
  Footer,
} from './styles'

const PageTemplate = ({
  idPage, sider, header, content, footer,
}) => {
  return (
    <Wrapper id={idPage}>
      <Sider>{sider}</Sider>
      <Header>{header}</Header>
      <Content>{content}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  )
}

PageTemplate.propTypes = {
  idPage: PropTypes.string.isRequired,
  sider: PropTypes.node.isRequired,
  header: PropTypes.node.isRequired,
  content: PropTypes.any.isRequired,
  footer: PropTypes.node.isRequired,
}

export { PageTemplate }
