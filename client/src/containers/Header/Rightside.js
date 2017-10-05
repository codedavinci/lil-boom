import React from 'react'
import { MyProfile, Logout } from '../../components/common'

export default  () => (
  <div style={{display: "flex", border: "1px solid blue"}}>
    <MyProfile />
    <Logout />
  </div>
)