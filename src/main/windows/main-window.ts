import { BrowserWindow } from 'electron'
import path from 'node:path'
import { loadWindow } from '../utils/load-window'

let mainWindow: BrowserWindow

export function createMainWindow() {
  if (mainWindow) {
    return mainWindow
  }

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
    },
    show: false,
    frame: false,
  })

  // and load the index.html of the app.
  loadWindow(mainWindow, 'home')

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  // // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  return mainWindow
}
