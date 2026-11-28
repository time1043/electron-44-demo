/// <reference types="@electron-forge/plugin-vite/forge-vite-env" />
/// <reference types="vite/client" />

import { ClipboardAction } from './types/clipboard-action'
import { clipboardHistory } from './types/clipboard-history'
import { WindowAction } from './types/window-action'

declare module '*.css'

export interface IElectronAPI {
  windowAction: (action: WindowAction) => void // ipcRenderer(): void
  clipboardAction: (
    action: ClipboardAction,
  ) => Promise<void | clipboardHistory[]>
}

declare global {
  interface Window {
    electronAPI: IElectronAPI
  }
}
