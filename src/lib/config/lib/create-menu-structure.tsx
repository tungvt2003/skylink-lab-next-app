export interface MenuItem {
  id: number
  name: string
  slug: string
  parent: number
  order: number
  url: string
  chosen: boolean
  selected?: boolean
}

interface Menu {
  id: number
  title: string
  url: string
  attribute?: Menu[]
}

function createMenuStructure(items?: MenuItem[]): Menu[] {
  const menu: Menu[] = []
  let currentParent: Menu | null = null
  let currentChild: Menu | null = null

  items &&
    items.forEach(item => {
      if (item.parent === 0) {
        currentParent = {
          id: item.id,
          title: item.name,
          url: `/${item.url}`,
          attribute: [],
        }
        menu.push(currentParent)
        currentChild = null
      } else if (item.parent === 1 && currentParent) {
        const child: Menu = {
          id: item.id,
          title: item.name,
          url: `/${item.url}`,
          attribute: [],
        }
        currentParent.attribute?.push(child)
        currentChild = child // Cập nhật currentChild
      } else if (item.parent === 2 && currentChild) {
        const subChild: Menu = {
          id: item.id,
          title: item.name,
          url: `/${item.url}`,
          attribute: [],
        }
        currentChild.attribute?.push(subChild)
      }
    })

  return menu
}

export default createMenuStructure
