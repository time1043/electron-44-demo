import { BrowserWindow } from 'electron'
import path from 'node:path'
import { loadWindow } from '../utils/load-window'

let mainWindow: BrowserWindow | undefined

export function createMainWindow() {
  // A closed window is destroyed but stays truthy, so also check for that
  // and recreate; otherwise using it throws `Object has been destroyed`.
  if (mainWindow && !mainWindow.isDestroyed()) {
    return mainWindow
  }

  // Create the browser window.
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
    },
    show: false,
    frame: false,
  })
  mainWindow = window

  // and load the index.html of the app.
  loadWindow(window, 'home')

  window.once('ready-to-show', () => {
    window.show()
  })

  // // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  return window
}
