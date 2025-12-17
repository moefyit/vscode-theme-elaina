import { darken, toHex, adjustHue, mix } from 'color2k'

export const primaryColor = '#ffb7c5'

export const basicColors = {
  black: '#1c1c1c',
  white: '#E8E8E8',
  gray: '#777777',
  cyan: '#00e8c6',
  red: '#ee5d43',
  green: '#96E072',
  yellow: '#FFE66D',
  blue: '#7cb7ff',
  pink: '#ff00aa',
  orange: '#f39c12',
  purple: '#c74ded',
}

export const uiColors = {
  background: '#2C2A35',
  foreground: '#E0E2F0',
  inactiveForeground: '#778b8a',
  activeForeground: basicColors.cyan,
  border: '#ffb7c5',

  dropBackground: '#495061d7',
  buttonBackground: toHex(adjustHue(primaryColor, -60)),
  badgeBackground: primaryColor,
  selectionBackground: basicColors.blue,

  inlayHintBackground: '#8b949e1c',
  inlayHintForeground: '#8b949e',

  matchHighlightBackground: '#FF9F2E60',

  info: '#00b0ff',
  warning: basicColors.yellow,
  error: basicColors.red,
}

export const tokenHighlightColors = {
  comment: '#a0a1a7cc',
  text: uiColors.foreground,
  string: basicColors.green,
  documentation: '#8ca777', // Comment (gray) + String (green)
  regex: '#7cb7ff',
  namespace: '#55c9ff',
  module: '#55c9ff',
  variable: basicColors.cyan,

  literal: toHex(darken(basicColors.blue, 0.2)),
  constant: basicColors.orange,
  exception: basicColors.red,
  operator: basicColors.red,
  type: '#0cae00',
  class: '#0cae00',
  struct: '#0cae00',
  function: basicColors.yellow,
  property: basicColors.purple,
  method: basicColors.yellow,
  macro: basicColors.purple,
  keyword: basicColors.pink,
  tag: '#f92672',
  storage: basicColors.pink,
  link: basicColors.purple,

  key: basicColors.cyan,
  objectSelf: basicColors.pink,
}
