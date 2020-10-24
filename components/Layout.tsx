import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Header, Wrapper, StyledLink, GlobalStyle, Title } from './StyledComponents'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <>
    <GlobalStyle />
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header>
      <Wrapper>
        <nav>
          <Link href="/">
            <StyledLink>Home</StyledLink>
          </Link>{' '}
        |{' '}
          <Link href="/new">
            <StyledLink>Create Post</StyledLink>
          </Link>{' '}
        </nav>
        <Title color="palevioletred">Blog</Title>
      </Wrapper>
    </Header>
    <Wrapper>
      {children}
    </Wrapper>
  </>
)

export default Layout
