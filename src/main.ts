import {
  app,
  BrowserWindow,
  Menu,
  MenuItem,
  MenuItemConstructorOptions,
  shell,
} from 'electron';
import started from 'electron-squirrel-startup';
import path from 'node:path';
import { registerIpcHandlers } from './main/ipc-handlers';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
  app.quit();
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
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`),
    );
  }

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  registerIpcHandlers();

  // https://www.electronjs.org/docs/latest/tutorial/application-menu
  // https://www.electronjs.org/docs/latest/tutorial/menus#default-menu-roles

  const alwaysOnTopMenuItem: MenuItemConstructorOptions = {
    label: 'Always on Top',
    type: 'checkbox',
    click: (menuItem, window) => {
      window?.setAlwaysOnTop(menuItem.checked);
    },
  };

  // const currentAppMenu = Menu.getApplicationMenu();
  const currentMenuItems =
    Menu.getApplicationMenu()?.items.map((item: MenuItem) => {
      if (item.role?.toLowerCase() === 'windowmenu') {
        return new MenuItem({
          role: 'windowMenu',
          // submenu: [...item.submenu?.items],
          submenu: Menu.buildFromTemplate([
            alwaysOnTopMenuItem,
            ...(item.submenu?.items || []),
          ]),
        });
      } else {
        return item;
      }
    }) || [];
  const menuTemplate: MenuItemConstructorOptions[] = [
    {
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click: async () => {
            await shell.openExternal('https://github.com/time1043');
          },
        },
      ],
    },
  ];
  const menu = Menu.buildFromTemplate([...currentMenuItems, ...menuTemplate]);
  Menu.setApplicationMenu(menu);

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
