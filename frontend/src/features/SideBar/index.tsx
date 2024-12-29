'use client'

import { type CustomFlowbiteTheme, Sidebar } from 'flowbite-react'
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
} from 'react-icons/hi'

interface IProps {
  categories: string[]
  onSelectCategory: (category: string) => void
}

export function SideBar({ categories, onSelectCategory }: IProps) {
  const customTheme: CustomFlowbiteTheme['sidebar'] = {
    root: {
      base: 'bg-bg-color',
      inner: 'bg-bg-color',
    },
    item: {
      base: 'bg-bg-color font-roboto text-22 ',
    },
    collapse: {
      button: 'p-0 hover:bg-bg-color',
      label: {
        icon: {
          base: 'hidden',
        },
      },
    },
  }
  return (
    <Sidebar theme={customTheme}>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {categories.map((cat) => (
            <Sidebar.Item
              key={cat}
              href="#"
              onClick={() => onSelectCategory(cat)}
            >
              {cat}
            </Sidebar.Item>
          ))}

          {/* <Sidebar.Collapse label="Горячие блюда">
							<Sidebar.Item href="#">Рыба</Sidebar.Item>
							<Sidebar.Item href="#">Мясо</Sidebar.Item>
						</Sidebar.Collapse> */}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
