import { insertClipboardHistory } from '@/main/db/clipboard'
import { CLIPBOARD_CHANGED_CHANNEL } from '@/types/channels/clipboard'
import { BrowserWindow } from 'electron'
import { getText, startWatch } from '@crosscopy/clipboard'

let watcher: ReturnType<typeof startWatch>

export function startMonitor() {
  watcher = startWatch(async () => {
    const text = await getText()
    insertClipboardHistory.run(text)

    // Signal renderers that new history exists; they refetch via IPC.
    BrowserWindow.getAllWindows().forEach((window) => {
      window.webContents.send(CLIPBOARD_CHANGED_CHANNEL)
    })
  })

  return watcher
}

export function stopMonitor() {
  watcher?.stop()
}
