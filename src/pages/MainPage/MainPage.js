import React from 'react'
import PropTypes from 'prop-types'

import { useNavigate, useParams } from 'react-router-dom'

import { Box, Grid, Typography } from '@mui/material'

import theme from '../../theme'

import getAll from '../../api/getAll'

import MainPageSearch from '../MainPageSearch'

export const MainPage = (props) => {
  const {
    sx,
    setIsLoading,
    setHasError,
    hasError,
    setData,
    data,
    ...otherProps
  } = props

  const navigate = useNavigate()

  const { searchPhrase } = useParams()

  React.useEffect(() => {
    const handleAsyncAction = async (asyncAction) => {
      setIsLoading(true)
      try {
        await asyncAction()
      } catch (error) {
        setHasError(true)
        hasError(error)
      } finally {
        setIsLoading(false)
      }
    }
    handleAsyncAction(async () => {
      if (searchPhrase) {
        const data = await getAll(`https://restcountries.com/v3.1/name/${searchPhrase}`)
        setData(data)
      } else {
        const data = await getAll('https://restcountries.com/v3.1/all')
        setData(data)
      }
    })
  }, [hasError, searchPhrase, setData, setHasError, setIsLoading])

  return (
    <>
      <Box
        sx={{
          ...sx,
          padding: '80px 10px 80px 10px',
          backgroundColor: 'hsl(207, 26%, 17%)',
          color: 'white'
        }}
        {...otherProps}
      >
        <Box
          marginBottom={'20px'}
        >
          <MainPageSearch/>
        </Box>
        <Grid
          spacing={{ xs: 2, md: 2 }}
          container
        >
          {
            data && data.map((item) => {
              return (
                <Grid
                  key={item.name.common}
                  item
                  xs={12}
                  sm={6}
                  md={3}
                >
                  <Box
                    onClick={() => { navigate(`/country/${item?.name.common}`) }}
                    sx={{
                      backgroundColor: 'hsl(209, 23%, 22%)',
                      borderRadius: '5px',
                      padding: '15px',
                      cursor: 'pointer'
                    }}
                  >
                    <Box
                      sx={{
                        marginBottom: '20px'
                      }}
                    >
                      <img
                        src={item.flags.png}
                        alt={'flaga'}
                        height={'200px'}
                      />
                    </Box>
                    <Box >
                      <Typography
                        variant={'h3'}
                        sx={{
                          marginBottom: '20px'
                        }}
                      >
                        {item.name.common}
                      </Typography>
                      <Box>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                          }}
                        >
                          <Typography
                            fontWeight={theme.typography.fontWeightBold}
                            variant={'body2'}
                          >
                            Population:
                          </Typography>
                          <span>{item.population}</span>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                          }}
                        >
                          <Typography
                            fontWeight={theme.typography.fontWeightBold}
                            variant={'body2'}
                          >
                            Region:
                          </Typography>
                          <span>{item.region}</span>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                          }}
                        >
                          <Typography
                            fontWeight={theme.typography.fontWeightBold}
                            variant={'body2'}
                          >
                            Capital:
                          </Typography>
                          <span>{item.capital}</span>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              )
            })
          }

        </Grid>
      </Box>
    </>
  )
}

MainPage.propTypes = {
  sx: PropTypes.object,
  setIsLoading: PropTypes.func,
  setHasError: PropTypes.func,
  hasError: PropTypes.bool,
  setData: PropTypes.func,
  data: PropTypes.array

}

export default MainPage
