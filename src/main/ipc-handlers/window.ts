import { BrowserWindow, dialog, IpcMainEvent } from 'electron';
import { WindowAction } from '../../types/window-action';

export function handleWindowAction(event: IpcMainEvent, action: WindowAction) {
  // Get window from event sender
  const window = BrowserWindow.fromWebContents(event.sender);
  if (!window) {
    dialog.showErrorBox('Error', 'Window not found');
    return;
  }

  if (action === WindowAction.CLOSE) {
    window?.close();
    return;
  }
  if (action === WindowAction.MAXIMIZE) {
    window?.maximize();
    return;
  }
  if (action === WindowAction.MINIMIZE) {
    window?.minimize();
    return;
  }
}
