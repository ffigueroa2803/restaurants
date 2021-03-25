
import React, { useEffect, useState } from 'react'

import Navigation from './navigations/Navigation'
import { Splash } from './components/splash'

const App = () => {

  const [splash, setSplash] = useState(true)

  useEffect(() => {
    setTimeout(async() => {
      setSplash(false)
    }, 5000)
  }, [])

  if (splash) { return <Splash loading={splash} /> }

  return (
    <Navigation />
  )
}

export default App
