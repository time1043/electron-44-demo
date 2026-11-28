import { insertClipboardHistory } from '@/main/db/clipboard'
import { getText, startWatch } from '@crosscopy/clipboard'

export function startMonitor() {
  const watcher = startWatch(async () => {
    const text = await getText()
    insertClipboardHistory.run(text)
  })

  return watcher
}
