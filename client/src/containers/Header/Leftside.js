import React from 'react'
import { Logo, Filter } from '../../components/common'

export default  ({ filters }) => (
  <div style={{ display: "flex", alignItems: "center", border: "1px solid red" }}>
    <Logo />
    <Filter filters={filters} />
  </div>
)