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

  items &&
    items.forEach(item => {
      if (item.parent === 0) {
        currentParent = {
          id: item.id,
          title: item.name,
          url: item.url?.startsWith("http") ? item.url : `/${item.url}`,
        }
        menu.push(currentParent)
      } else if (item.parent === 1 && currentParent) {
        if (!currentParent.attribute) {
          currentParent.attribute = []
        }
        currentParent.attribute.push({
          id: item.id,
          title: item.name,
          url: item.url?.startsWith("http") ? item.url : `/${item.url}`,
        })
      }
    })

  return menu
}

export default createMenuStructure
