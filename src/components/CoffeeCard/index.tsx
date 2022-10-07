import { useState, useContext } from 'react'
import { ShoppingCart, Minus, Plus } from 'phosphor-react'
import { Coffee, Categories } from '../../utils/data'
import * as S from './styles'
import { CartContext } from '../../contexts/CartContext'

export function CoffeeCard({
  id,
  image,
  categories,
  name,
  description,
  price,
}: Coffee) {
  const { addItemToCart } = useContext(CartContext)
  const [counter, setCounter] = useState(0)

  function incrementCounter() {
    setCounter((state) => {
      return state + 1
    })
  }

  function decrementCounter() {
    if (counter > 0)
      setCounter((state) => {
        return state - 1
      })
  }

  function handleAddToCart() {
    addItemToCart({
      id,
      image,
      categories,
      name,
      description,
      price,
      quantity: counter,
    })
    alert(`Você adicionou ${counter} item(s) no carrinho.\n - ${name}`)
  }

  const counterIsZero = counter === 0

  return (
    <S.CardContainer>
      <S.Image src={image} alt="" />
      <S.CategoriesContainer>
        {categories.map((category) => (
          <S.Category key={category}>{category}</S.Category>
        ))}
      </S.CategoriesContainer>
      <S.Title>{name}</S.Title>
      <S.Description>{description}</S.Description>
      <S.CardBottomContainer>
        <S.Price>
          R$ <span>{String(price.toFixed(2)).replace('.', ',')}</span>
        </S.Price>
        <S.ButtonsContainer>
          <S.QuantityButton>
            <button onClick={decrementCounter} disabled={counterIsZero}>
              <Minus size={14} />
            </button>
            {counter}
            <button onClick={incrementCounter}>
              <Plus size={14} />
            </button>
          </S.QuantityButton>
          <S.CartButton onClick={handleAddToCart} disabled={counterIsZero}>
            <ShoppingCart size={22} weight="fill" />
          </S.CartButton>
        </S.ButtonsContainer>
      </S.CardBottomContainer>
    </S.CardContainer>
  )
}
