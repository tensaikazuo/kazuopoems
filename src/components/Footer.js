import React from 'react'
import styled from 'styled-components'

const CustomFooter = styled.footer`
  color: white;
  background-color: #000033;
  text-align: center;
  padding: 0.1em 0 0.1em 0;
`

const CustomA = styled.a`
  color: white;
  & :visited: none;
`

const now   = new Date()
const year  = now.getFullYear()

export default () => (
  <div>
    <CustomFooter>
      <div>
        <p>
          Kazuo ARAKI<br />
          1991 -<br />
          Web developper, cyclist, poet<br />
          <CustomA href="mailto:tensaikazuo@hey.com">tensaikazuo@hey.com</CustomA>
        </p>
      </div>
      <small>&copy;{year} Kazuo ARAKI </small>
    </CustomFooter>
  </div>
)
