import {
  Menu,
  MenuItem,
  MenuItemConstructorOptions,
  nativeImage,
  shell,
} from 'electron';

/**
 * Customize the application menu (the top menu bar).
 *
 * https://www.electronjs.org/docs/latest/tutorial/application-menu
 * https://www.electronjs.org/docs/latest/tutorial/menus#default-menu-roles
 */
export function registerApplicationMenu() {
  const alwaysOnTopMenuItem: MenuItemConstructorOptions = {
    label: 'Always on Top',
    type: 'checkbox',
    click: (menuItem, window) => {
      window?.setAlwaysOnTop(menuItem.checked);
    },
    icon: nativeImage.createMenuSymbol('pin'),
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
}
