import { BrowserWindow } from 'electron'
import path from 'node:path'
import { loadWindow } from '../utils/load-window'

let settingWindow: BrowserWindow

export function createSettingWindow() {
  if (settingWindow) {
    return settingWindow
  }

  // Create the browser window.
  settingWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
    },
    show: false,
  })

  // and load the index.html of the app.
  loadWindow(settingWindow, 'setting')

  settingWindow.once('ready-to-show', () => {
    settingWindow.show()
  })

  // // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  return settingWindow
}
