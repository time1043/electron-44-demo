import { insertClipboardHistory } from '@/main/db/clipboard'
import { getText, startWatch } from '@crosscopy/clipboard'

let watcher: ReturnType<typeof startWatch>

export function startMonitor() {
  watcher = startWatch(async () => {
    const text = await getText()
    insertClipboardHistory.run(text)
  })

  return watcher
}

export function stopMonitor() {
  watcher?.stop()
}
