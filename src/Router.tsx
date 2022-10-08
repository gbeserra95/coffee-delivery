import { ReactElement, useContext } from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'

import { CartContext } from './contexts/CartContext'

import { DefaultLayout } from './layouts/DefaultLayout'

import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { Success } from './pages/Success'

function PrivateRoute(): ReactElement {
  const { items } = useContext(CartContext)

  if (items.length === 0) return <Navigate to="/" />

  return <Outlet />
}

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<PrivateRoute />}>
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
