import { app } from 'electron'
import path from 'node:path'

/**
 * Resolve a file inside the project's `assets/` folder.
 *
 * The Vite plugin only packs the `.vite` output into `app.asar`, so `assets/`
 * is shipped as an extra resource (`packagerConfig.extraResource`) and lives in
 * `Contents/Resources/assets` once the app is packaged. `app.getAppPath()` points
 * at `app.asar` in that case, which would resolve to a non-existent path.
 */
export function assetPath(...segments: string[]): string {
  // const resourcesPath = process.resourcesPath;
  // const appPath = app.getAppPath();
  // console.log({ resourcesPath, appPath });

  // dev:
  // resourcesPath: '/Users/oswin902/Documents/code3/base/web/electron-44-demo/node_modules/electron/dist/Electron.app/Contents/Resources',
  // appPath: '/Users/oswin902/Documents/code3/base/web/electron-44-demo'

  // packaged:
  // ./out/SyncPaste-darwin-arm64/SyncPaste.app/Contents/MacOS/SyncPaste
  // resourcesPath: '/Users/oswin902/Documents/code3/base/web/electron-44-demo/out/SyncPaste-darwin-arm64/SyncPaste.app/Contents/Resources',
  // appPath: '/Users/oswin902/Documents/code3/base/web/electron-44-demo/out/SyncPaste-darwin-arm64/SyncPaste.app/Contents/Resources/app.asar'

  const baseDir = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(app.getAppPath(), 'assets')

  return path.join(baseDir, ...segments)
}
