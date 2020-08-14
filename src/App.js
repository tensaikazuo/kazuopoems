import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Switch, Route, Link } from 'react-router-dom'

import './app.css'
import Header from 'components/HeaderNav'
import Footer from 'components/Footer'

// Any routes that start with 'dynamic' will be treated as non-static routes
// addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <Header />
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Switch>
            <Route render={() => <Routes />} />
          </Switch>
        </React.Suspense>
      </div>
      <Footer />
    </Root>
  )
}

export default App
