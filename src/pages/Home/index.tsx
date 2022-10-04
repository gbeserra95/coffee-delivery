import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import mainImage from '../../assets/main-image.svg'
import { CoffeeCard } from '../../components/CoffeeCard'
import * as S from './styles'

export function Home() {
  return (
    <main>
      <S.IntroContainer>
        <S.ContentContainer>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora{' '}
            </p>
          </div>
          <S.ItemsContainer>
            <S.ItemContainer>
              <S.Icon bg="yellowDark">
                <ShoppingCart size={16} weight="fill" />
              </S.Icon>
              Compra simples e segura
            </S.ItemContainer>
            <S.ItemContainer>
              <S.Icon bg="gray">
                <Package size={16} weight="fill" />
              </S.Icon>
              Embalagem mantém o café intacto
            </S.ItemContainer>
            <S.ItemContainer>
              <S.Icon bg="yellow">
                <Timer size={16} weight="fill" />
              </S.Icon>
              Entrega rápida e rastreada
            </S.ItemContainer>
            <S.ItemContainer>
              <S.Icon bg="purple">
                <Coffee size={16} weight="fill" />
              </S.Icon>
              O café chega fresquinho até você
            </S.ItemContainer>
          </S.ItemsContainer>
        </S.ContentContainer>
        <img src={mainImage} alt="" />
      </S.IntroContainer>
      <S.CoffeeListContainer>
        <h2>Nossos cafés</h2>
        <S.List>
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </S.List>
      </S.CoffeeListContainer>
    </main>
  )
}
