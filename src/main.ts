import { app, BrowserWindow, Menu, nativeImage, Tray } from 'electron'
import started from 'electron-squirrel-startup'
import path from 'node:path'
import { assetPath } from './main/assets'
import { registerIpcHandlers } from './main/ipc-handlers'
import { registerMenus } from './main/menus'

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
  app.quit()
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
    },
    show: false,
    frame: false,
  })

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL)
  } else {
    mainWindow.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`),
    )
  }

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  // // Open the DevTools.
  // mainWindow.webContents.openDevTools();
}

// save a reference to the Tray object globally to avoid garbage collection
let tray

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  registerIpcHandlers()
  registerMenus()

  const trayLogo = nativeImage.createFromPath(assetPath('tray.png'))
  if (trayLogo.isEmpty()) {
    console.warn(
      `[tray] failed to load tray icon from ${assetPath('tray.png')}`,
    )
  }
  if (process.platform === 'darwin') {
    trayLogo.setTemplateImage(true)
  }

  // The Tray can only be instantiated after the 'ready' event is fired
  tray = new Tray(trayLogo)
  const contextMenu = Menu.buildFromTemplate([{ role: 'quit' }])
  tray.setContextMenu(contextMenu)

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
