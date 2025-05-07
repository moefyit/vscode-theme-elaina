import { promises as fs } from 'fs'
import * as path from 'path'

// Same as https://github.com/HaaLeo/publish-vscode-extension/blob/master/src/createPackage.ts
async function _getPackageName(packagePath: string): Promise<string> {
  const rawJson = await fs.readFile(path.join(packagePath, 'package.json'), 'utf8')
  const json = JSON.parse(rawJson) as { name: string; version: string }
  if (!json.name || !json.version) {
    throw new Error('The extension\'s package.json must contain a "name" and "version" field.')
  }

  return `${json.name}-${json.version}.vsix`
}

console.log(await _getPackageName('./'))
