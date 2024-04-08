import React from 'react'

import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/MainPage'
import CountryPage from './pages/CountryPage'
import MainPageSearch from './pages/MainPageSearch'

export const App = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [hasError, setHasError] = React.useState(false)
  const [data, setData] = React.useState(null)
  // eslint-disable-next-line no-unused-vars

  return (
    <>

      {
      (
        isLoading
      )
        ? (
            'LOADING'
          )
        : null
    }
      {
      (
        hasError
      )
        ? (
            'ERROR'
          )
        : null
    }

      <Routes>
        <Route
          path={'/'}
          element={<MainPage
            setIsLoading={setIsLoading}
            setHasError={setHasError}
            hasError={hasError}
            data={data}
            setData={setData}
                   />}
        >
          <Route
            path={':searchPhrase'}
            element={<MainPageSearch/>}
          />
        </Route>
        <Route
          path={'/country/:name'}
          element={<CountryPage
            setIsLoading={setIsLoading}
            setHasError={setHasError}
            hasError={hasError}
            data={data}
            setData={setData}
                   />}
        />
      </Routes>

    </>
  )
}

export default App
