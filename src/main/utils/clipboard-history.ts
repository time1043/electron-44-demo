import {
  insertClipboardHistory,
  queryClipboardHistory,
} from '@/main/db/clipboard'
import { ClipboardHistory } from '@/types/clipboard-history'
import { getText, startWatch } from '@crosscopy/clipboard'

export function startMonitor() {
  const watcher = startWatch(async () => {
    const text = await getText()
    insertClipboardHistory.run(text)
    const clipboardHistoryList =
      queryClipboardHistory.all() as ClipboardHistory[]
    console.log({ clipboardHistoryList })
  })

  return watcher
}
