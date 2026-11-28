import { ClipboardAction } from '@/types/clipboard-action'
import { clipboardHistory } from '@/types/clipboard-history'
import { IpcMainInvokeEvent } from 'electron'
import { queryClipboardHistory } from '../db/clipboard'
import { stopMonitor } from '../utils/clipboard-history'

export function handleClipboardAction(
  _event: IpcMainInvokeEvent,
  action: ClipboardAction,
) {
  if (action === ClipboardAction.STOP_MONITOR) {
    return stopMonitor()
  }

  if (action === ClipboardAction.GET_HISTORIES) {
    const clipboardHistoryList =
      queryClipboardHistory.all() as clipboardHistory[]
    return clipboardHistoryList
  }
}
