import React from 'react'
import { type CustomFlowbiteTheme, Card } from 'flowbite-react'
import type { IMenuCard } from '@/src/widgets/MenuPage'
interface IProps {
  cards: IMenuCard[]
}
const DishCard = ({ cards }: IProps) => {
  // console.log('cards', cards)
  const customTheme: CustomFlowbiteTheme['card'] = {
    root: {
      children: '',
    },
  }

  return (
    <div className="flex gap-4 flex-wrap">
      {cards.map((el) => {
        // console.log('el.i', el)

        const imageUrl = `${process.env.NEXT_PUBLIC_IMAGE_URL}${el.image.url}`
        return (
          <Card
            theme={customTheme}
            key={el.id}
            className=" max-w-80  bg-bg-color font-vollkorn"
            imgSrc={imageUrl}
          >
            <div className="  flex flex-col bg-red-300 p-3">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                {el.title}
              </h3>
              <p className="">{el.description}</p>
              <p className="mt-6">{el.price} lei</p>
            </div>
          </Card>
        )
      })}
    </div>
  )
}

export default DishCard
