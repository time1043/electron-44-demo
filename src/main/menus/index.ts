import { registerApplicationMenu } from './application'
import { registerTray } from './tray'

/**
 * Register all menus (application menu, tray menu, and later context menus).
 * Call once after `app.whenReady()`.
 */
export function registerMenus() {
  registerApplicationMenu()
  registerTray()
}
