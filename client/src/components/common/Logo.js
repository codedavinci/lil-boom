import boom from '../../images/boomtown-logo.svg'
import React from 'react'

export const Logo = () => (
  <div style={{ marginRight: 30, marginLeft: 20}} >
    <a href="/">
      <img src={boom} alt="" style={{ width: "auto", height: 36, margin: "auto" }} />
    </a>
  </div>
)
