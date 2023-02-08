import { promises as fs } from 'node:fs'
import { theme } from './theme.mjs'

const themeDir = './themes'

await fs.mkdir(themeDir, { recursive: true })
await fs.writeFile(`${themeDir}/elaina-color-theme.json`, `${JSON.stringify(theme, null, 2)}\n`)
console.log(`Theme written to ${themeDir}/elaina-color-theme.json`)
