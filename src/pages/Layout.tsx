import { Outlet, Link } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import Title from '../components/Title'
import Button from '../components/Button'
import Container from '../components/Container'
import { useState, useEffect } from 'react'
import Contact from '../components/Contact'

const Layout = () => {
  const GlobalStyles = createGlobalStyle`
  ${normalize}
  * {
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
  }
`

  // const fetchPosts = () => {
  //   fetch(
  //     `https://api.mozambiquehe.re/maprotation?auth=8d072d8c59fb71f2e0a1b7bebaabe8bd&version=1`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log('data', data)
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error)
  //     })
  // }

  // useEffect(() => {
  //   fetchPosts()
  // }, [])

  return (
    <>
      <GlobalStyles />
      <Container>
        <Title text='Apex Legends Stats' />
        <Outlet />
      </Container>
      <link
        href='https://fonts.googleapis.com/css?family=Poppins&display=swap'
        rel='stylesheet'
      />
    </>
  )
}

export default Layout
