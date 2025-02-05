import { Icons } from './constants'
import { IconName } from './types'

export const getIconName = (name: IconName, theme?: 'solid' | 'outline'): IconName => {
  for (const category of Object.values(Icons)) {
    for (const icons of category as readonly (readonly string[])[]) {
      const baseIcon = icons[0] as IconName
      const outlineIcon = (icons[1] ?? icons[0]) as IconName

      if (icons.includes(name)) {
        return theme === 'outline' ? outlineIcon : baseIcon
      }
    }
  }

  return name
}
