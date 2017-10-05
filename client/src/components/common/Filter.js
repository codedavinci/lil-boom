import React from 'react'
import { SelectField, MenuItem} from 'material-ui'

export const Filter = ({ filters }) => (
  <SelectField hintText="Filter by Tag">
    {filters.map(filter =>
      <MenuItem key={filter.id} value={filter.id} primaryText={filter.name} />)}
  </SelectField>
)