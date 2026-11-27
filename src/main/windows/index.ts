export const WINDOWS = {
  home: 'home',
  setting: 'setting',
} as const

export type WindowHash = (typeof WINDOWS)[keyof typeof WINDOWS]
