import { BrowserWindow } from 'electron'
import path from 'node:path'
import { loadWindow } from '../utils/load-window'

let settingWindow: BrowserWindow | undefined

export function createSettingWindow() {
  // A closed window is destroyed but stays truthy, so also check for that
  // and recreate; otherwise using it throws `Object has been destroyed`.
  if (settingWindow && !settingWindow.isDestroyed()) {
    return settingWindow
  }

  // Create the browser window.
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
    },
    show: false,
  })
  settingWindow = window

  // and load the index.html of the app.
  loadWindow(window, 'setting')

  window.once('ready-to-show', () => {
    window.show()
  })

  // // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  return window
}
