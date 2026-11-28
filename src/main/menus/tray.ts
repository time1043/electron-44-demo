import { Menu, MenuItemConstructorOptions, nativeImage, Tray } from 'electron'
import { assetPath } from '../assets'
import { createMainWindow } from '../windows/main-window'
import { createSettingWindow } from '../windows/setting-window'

// Keep a module-level reference to the Tray object, otherwise it would be
// garbage collected and the icon would disappear.
// https://www.electronjs.org/docs/latest/faq#my-apps-tray-disappeared-after-a-few-minutes
// https://www.bilibili.com/video/BV1VPH56pEp3?comment_on=1&comment_root_id=318227897857&share_tag=s_i#reply318227897857
// https://www.bilibili.com/video/BV1VPH56pEp3?t=208.8
// https://www.bilibili.com/video/BV1N4nd6REBT?t=38.9
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

  const contextMenuTemplate: MenuItemConstructorOptions[] = [
    { role: 'quit' },
    { role: 'about' },
    {
      label: 'settings',
      icon: nativeImage.createMenuSymbol('gear'),
      click: () => {
        const settingWindow = createSettingWindow()
        if (settingWindow.isVisible()) {
          settingWindow.show()
        }
      },
    },
  ]
  const contextMenu = Menu.buildFromTemplate(contextMenuTemplate)
  // Only show the context menu on right-click, not on left-click.
  // tray.setContextMenu(contextMenu)
  tray.on('right-click', () => {
    tray?.popUpContextMenu(contextMenu)
  })

  // Left-click toggles the main window, the usual interaction for tray apps.
  tray.on('click', () => {
    const mainWindow = createMainWindow()
    mainWindow.show()
  })

  return tray
}
