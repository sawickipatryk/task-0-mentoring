/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

import { Box, Button, Typography, Container, Grid } from '@mui/material'

import { useNavigate, useParams } from 'react-router-dom'
import theme from '../../theme'

import getOne from '../../api/getOne'

export const CountryPage = (props) => {
  const [country, setCountry] = React.useState(null)
  const {
    sx,
    setIsLoading,
    setHasError,
    hasError,
    setData,
    data,
    ...otherProps
  } = props

  const { name } = useParams()

  console.log(country)

  const navigate = useNavigate()

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
      const data = await getOne(`https://restcountries.com/v3.1/name/${name}`)
      console.log(data)
      setCountry(data)
    })
  }, [hasError, name, setData, setHasError, setIsLoading])

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
        <Container

          maxWidth={'lg'}
          sx={{
            backgroundColor: 'hsl(207, 26%, 17%)'
          }}
        >
          <Box>
            <Button
              onClick={() => { navigate('/') }}
              sx={{
                marginBottom: '20px'
              }}
              variant={'contained'}
            >BACK
            </Button>
          </Box>
          {
          country && country.map((item) => {
            return (
              <Grid
                key={item.name}
                container
                spacing={{ xs: 2, md: 4 }}
              >
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                >
                  <img
                    src={item.flags.png}
                    alt={item.flags.alt}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                >
                  <Typography
                    variant={'h4'}
                    marginBottom={'30px'}
                  >
                    {item.name.common}
                  </Typography>
                  <Grid
                    container
                    spacing={{ xs: 2, md: 10 }}
                  >
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={6}
                    >
                      <Box
                        sx={{
                          display: 'flex'
                        }}
                      >
                        <Typography
                          variant={'body2'}
                          fontWeight={theme.typography.fontWeightBold}
                        >
                          Native Name:
                        </Typography>
                        {/* <span>{item && item.name && item.name.nativeName.srp.common}</span> */}
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <Typography
                          variant={'body2'}
                          fontWeight={theme.typography.fontWeightBold}
                        >
                          Population:
                        </Typography>
                        <span>{item && item.population}</span>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <Typography
                          variant={'body2'}
                          fontWeight={theme.typography.fontWeightBold}
                        >
                          Region:
                        </Typography>
                        <span>{item && item.region}</span>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <Typography
                          variant={'body2'}
                          fontWeight={theme.typography.fontWeightBold}
                        >
                          Sub Region:
                        </Typography>
                        <span>{item && item.subregion}</span>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <Typography
                          variant={'body2'}
                          fontWeight={theme.typography.fontWeightBold}
                        >
                          Capital:
                        </Typography>
                        <span>{item && item.capital[0]}</span>
                      </Box>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={6}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <Typography
                          variant={'body2'}
                          fontWeight={theme.typography.fontWeightBold}
                        >
                          Capital:
                        </Typography>
                        <span>{item && item.tld[0]}</span>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <Typography
                          variant={'body2'}
                          fontWeight={theme.typography.fontWeightBold}
                        >
                          Currencies:
                        </Typography>
                        {/* <span>{item && item.currencies}</span> */}
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <Typography
                          variant={'body2'}
                          fontWeight={theme.typography.fontWeightBold}
                        >
                          Languages:
                        </Typography>
                        {/* <span>{item && item.currencies}</span> */}
                      </Box>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <Typography
                          variant={'body2'}
                          fontWeight={theme.typography.fontWeightBold}
                        >
                          Border Countries:
                        </Typography>
                        {/* <span>{item && item.currencies}</span> */}
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

            )
          })
        }
        </Container>
      </Box>

    </>

  )
}

CountryPage.propTypes = {
  sx: PropTypes.object,
  setIsLoading: PropTypes.func,
  setHasError: PropTypes.func,
  hasError: PropTypes.bool,
  setData: PropTypes.func,
  data: PropTypes.array
}

export default CountryPage
