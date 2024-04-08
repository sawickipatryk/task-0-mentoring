import React from 'react'
import PropTypes from 'prop-types'

import { Box, Typography } from '@mui/material'

import { useParams, useNavigate } from 'react-router-dom'

export const MainPageSearch = (props) => {
  const {
    sx,
    ...otherProps
  } = props

  const { searchPhrase } = useParams()
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        ...sx
      }}
      {...otherProps}
    >
      <Typography>
        SearchInput
      </Typography>
      <input
        value={searchPhrase || ''}
        onChange={(e) => navigate(e.target.value)}
      />
    </Box>
  )
}

MainPageSearch.propTypes = {
  sx: PropTypes.object
}

export default MainPageSearch
