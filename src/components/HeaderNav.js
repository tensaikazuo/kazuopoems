import React from 'react'
import styled from 'styled-components'

const CustomNav = styled.nav`
  width: 100%;
  background-color: #000033;
`

const CustomA = styled.a`
  color: white;
  padding: 1rem;
  display: inline-block;
  text-decoration: none;
  & :visited: none;
`

export default () => (
  <CustomNav>
    <CustomA href="/">Home</CustomA>
  </CustomNav>
)
