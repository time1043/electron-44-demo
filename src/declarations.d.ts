/// <reference types="@electron-forge/plugin-vite/forge-vite-env" />

import { WindowAction } from './types/window-action';

declare module '*.css';

export interface IElectronAPI {
  windowAction: (action: WindowAction) => void; // ipcRenderer(): void
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
