export type Categories =
  | 'tradicional'
  | 'com leite'
  | 'gelado'
  | 'especial'
  | 'alcoólico'

export interface Coffee {
  image: string
  name: string
  description: string
  categories: Categories[]
  price: Number
}

export const CoffeeList: Coffee[] = [
  {
    image: '../assets/expresso.png',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    categories: ['tradicional'],
    price: 4.5,
  },
  {
    image: '../assets/expresso-americano.png',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    categories: ['tradicional'],
    price: 4.9,
  },
  {
    image: '../assets/expresso-cremoso.png',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    categories: ['tradicional'],
    price: 5.9,
  },
  {
    image: '../assets/expresso-gelado.png',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    categories: ['tradicional', 'gelado'],
    price: 5.9,
  },
  {
    image: '../assets/cafe-com-leite.png',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    categories: ['tradicional', 'com leite'],
    price: 5.9,
  },
  {
    image: '../assets/latte.png',
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    categories: ['tradicional', 'com leite'],
    price: 5.9,
  },
  {
    image: '../assets/capuccino.png',
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    categories: ['tradicional', 'com leite'],
    price: 6.9,
  },
  {
    image: '../assets/macchiato.png',
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    categories: ['tradicional', 'com leite'],
    price: 6.9,
  },
  {
    image: '../assets/mocaccino.png',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    categories: ['tradicional'],
    price: 7.9,
  },
  {
    image: '../assets/chocolate-quente.png',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    categories: ['especial', 'com leite'],
    price: 8.9,
  },
  {
    image: '../assets/cubano.png',
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    categories: ['especial', 'alcoólico', 'gelado'],
    price: 9.9,
  },
  {
    image: '../assets/havaiano.png',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    categories: ['especial'],
    price: 8.9,
  },
  {
    image: '../assets/arabe.png',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    categories: ['especial'],
    price: 7.9,
  },
  {
    image: '../assets/irlandes.png',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    categories: ['especial', 'alcoólico'],
    price: 11.9,
  },
]
