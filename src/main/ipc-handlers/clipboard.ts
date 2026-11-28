import { ClipboardAction } from '@/types/clipboard-action'
import { clipboardHistory } from '@/types/clipboard-history'
import { IpcMainInvokeEvent } from 'electron'
import { queryClipboardHistory } from '../db/clipboard'

export function handleClipboardAction(
  _event: IpcMainInvokeEvent,
  action: ClipboardAction,
) {
  if (action === ClipboardAction.GET_HISTORIES) {
    const clipboardHistoryList =
      queryClipboardHistory.all() as clipboardHistory[]
    return clipboardHistoryList
  }
}
