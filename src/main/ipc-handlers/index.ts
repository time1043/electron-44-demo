import { ipcMain } from 'electron';
import { handleWindowAction } from './window';
import { WINDOW_ACTION_CHANNEL } from '@/types/channels/window';

/**
 * Register all main-process IPC handlers.
 * Call once after `app.whenReady()`.
 */
export function registerIpcHandlers() {
  ipcMain.on(WINDOW_ACTION_CHANNEL, handleWindowAction);
}
