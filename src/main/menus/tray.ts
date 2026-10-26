import { Menu, MenuItemConstructorOptions, nativeImage, Tray } from 'electron'
import { assetPath } from '../assets'

// Keep a module-level reference to the Tray object, otherwise it would be
// garbage collected and the icon would disappear.
let tray: Tray | null = null

/** The current tray instance, or `null` before {@link registerTray} ran. */
export function getTray(): Tray | null {
  return tray
}

/**
 * Create the system tray icon and its context menu.
 *
 * The Tray can only be instantiated after the `ready` event is fired, so call
 * this once inside `app.whenReady()`.
 *
 * https://www.electronjs.org/docs/latest/api/tray
 */
export function registerTray(): Tray {
  if (tray) return tray

  const trayLogo = nativeImage.createFromPath(assetPath('tray.png'))
  if (trayLogo.isEmpty()) {
    console.warn(
      `[tray] failed to load tray icon from ${assetPath('tray.png')}`,
    )
  }
  if (process.platform === 'darwin') {
    trayLogo.setTemplateImage(true)
  }

  tray = new Tray(trayLogo)

  const contextMenuTemplate: MenuItemConstructorOptions[] = [{ role: 'quit' }]
  tray.setContextMenu(Menu.buildFromTemplate(contextMenuTemplate))

  return tray
}
