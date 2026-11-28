import { CLIPBOARD_ACTION_CHANNEL } from '@/types/channels/clipboard'
import { WINDOW_ACTION_CHANNEL } from '@/types/channels/window'
import { ipcMain } from 'electron'
import { handleClipboardAction } from './clipboard'
import { handleWindowAction } from './window'

/**
 * Register all main-process IPC handlers.
 * Call once after `app.whenReady()`.
 */
export function registerIpcHandlers() {
  ipcMain.on(WINDOW_ACTION_CHANNEL, handleWindowAction)
  ipcMain.handle(CLIPBOARD_ACTION_CHANNEL, handleClipboardAction)
}
