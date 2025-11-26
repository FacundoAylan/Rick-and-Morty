import { BrowserRouter, Route } from 'react-router'
import { RoutesWithNotFound } from './components'
import { Dashboard, LandingPage } from './pagesPublic'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route path="/" element={<LandingPage/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
      </RoutesWithNotFound >
    </BrowserRouter>
  )
}