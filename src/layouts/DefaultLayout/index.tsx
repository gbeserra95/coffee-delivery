import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

import * as S from './styles'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <S.LayoutContainer>
        <Outlet />
      </S.LayoutContainer>
    </>
  )
}
