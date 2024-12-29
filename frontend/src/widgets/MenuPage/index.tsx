'use client'
import DishCard from '@/src/features/DishCard'
import { SideBar } from '@/src/features/SideBar'
// import { getData } from '@/src/shared/api'
import qs from 'qs'
import React, { useEffect, useState } from 'react'

interface IImage {
  alternativeText: string
  documentId: string
  id: number
  name: string
  url: string
}
export interface IMenuCard {
  id: number
  title: string
  description: string
  price: number
  image: IImage
}
interface IMenuItem {
  id: number
  title: string
  card: IMenuCard[]
}

export async function getData(path: string, query: string) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL

  const url = new URL(path, baseUrl)
  url.search = query

  const res = await fetch(url.href)
  if (!res.ok) throw new Error('Failed to fetch data')
  const data = await res.json()
  return data
}

const MenuPage = () => {
  const [menuData, setMenuData] = useState<IMenuItem[]>()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const queryMenu = qs.stringify({
      populate: {
        category: {
          populate: {
            card: {
              populate: {
                image: {
                  fields: ['alternativeText', 'name', 'url'],
                },
              },
            },
          },
        },
      },
    })
    const fetchMenuData = async () => {
      try {
        const response = await getData('api/sidebar', queryMenu)

        const categories: IMenuItem[] = response.data.category
        setMenuData(categories)
        setSelectedCategory(categories[0].title)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchMenuData()
  }, [])

  if (loading) return <div>Loading...</div>
  if (menuData === undefined) {
    return <div>Что то пошло не так...</div>
  }
  if (error) return <div>Error: {error}</div>

  return (
    <div className="flex  bg-bg-color">
      <SideBar
        categories={menuData.map((el) => el.title)}
        onSelectCategory={setSelectedCategory}
      />
      {menuData
        .filter((el) => el.title === selectedCategory)
        .map((item) => (
          <DishCard key={item.id} cards={item.card} />
        ))}
    </div>
  )
}

export default MenuPage
