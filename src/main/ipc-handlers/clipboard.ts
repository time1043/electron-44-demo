import { ClipboardAction } from '@/types/clipboard-action'
import { ClipboardHistory } from '@/types/clipboard-history'
import { IpcMainInvokeEvent } from 'electron'
import { deleteClipboardHistory, queryClipboardHistory } from '../db/clipboard'
import { stopMonitor } from '../utils/clipboard-history'

export function handleClipboardAction(
  _event: IpcMainInvokeEvent,
  action: ClipboardAction,
  historyId?: number,
) {
  if (action === ClipboardAction.STOP_MONITOR) {
    return stopMonitor()
  }

  if (action === ClipboardAction.GET_HISTORIES) {
    const clipboardHistoryList =
      queryClipboardHistory.all() as ClipboardHistory[]
    return clipboardHistoryList
  }

  if (action === ClipboardAction.DELETE_HISTORY && historyId) {
    const { changes } = deleteClipboardHistory.run(historyId) // StatementResultingChanges
    return changes > 0
  }
}
