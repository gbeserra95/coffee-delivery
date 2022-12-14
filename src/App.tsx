import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { CartContextProvider } from './contexts/CartContext'
import { DeliveryContextProvider } from './contexts/DeliveryContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <DeliveryContextProvider>
          <CartContextProvider>
            <Router />
          </CartContextProvider>
        </DeliveryContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
