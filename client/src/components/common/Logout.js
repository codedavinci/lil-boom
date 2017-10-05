import React from 'react'
import { RaisedButton } from 'material-ui'

export const Logout = () => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
    <RaisedButton
      label="Logout"
      labelColor="white"
      buttonStyle={{ backgroundColor: "#273339" }} />
  </div>
)