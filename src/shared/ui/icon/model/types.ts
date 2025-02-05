import { Icons } from './constants'

export type IconCategory = keyof typeof Icons
export type IconName = (typeof Icons)[IconCategory][number][number]
