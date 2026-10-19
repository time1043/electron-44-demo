import { ipcMain } from 'electron';
import { WINDOW_ACTION_CHANNEL } from '../types/channels/window';
import { handleWindowAction } from './window';

/**
 * Register all main-process IPC handlers.
 * Call once after `app.whenReady()`.
 */
export function registerIpcHandlers() {
  ipcMain.on(WINDOW_ACTION_CHANNEL, handleWindowAction);
}
