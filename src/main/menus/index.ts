import { registerApplicationMenu } from './application'

/**
 * Register all menus (application menu, and later context/dock/tray menus).
 * Call once after `app.whenReady()`.
 */
export function registerMenus() {
  registerApplicationMenu()
}
