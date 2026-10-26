// oxlint-disable eslint-plugin-unicorn/no-empty-file
// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { WINDOW_ACTION_CHANNEL } from '@/types/channels/window'
import { WindowAction } from '@/types/window-action'
import { contextBridge, ipcRenderer } from 'electron'

const apiKey = 'electronAPI'

const api = {
  windowAction: (action: WindowAction) =>
    ipcRenderer.send(WINDOW_ACTION_CHANNEL, action),
} satisfies Window[typeof apiKey]

contextBridge.exposeInMainWorld(apiKey, api)
