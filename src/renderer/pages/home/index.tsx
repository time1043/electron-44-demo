import { ClipboardAction } from '@/types/clipboard-action'
import { ClipboardHistory } from '@/types/clipboard-history'
import { useEffect, useState } from 'react'
import RootLayout from './root-layout'
import ClipboardHistoryList from '@/renderer/ui/clipboard/clipboard-history-list'

const { clipboardAction, onClipboardChanged } = window.electronAPI

export default function Home() {
  const [clipboardHistoryList, setClipboardHistoryList] = useState<
    ClipboardHistory[]
  >([])

  async function loadClipboardHistory() {
    const clipboardHistoryList = await clipboardAction(
      ClipboardAction.GET_HISTORIES,
    )

    if (Array.isArray(clipboardHistoryList)) {
      setClipboardHistoryList(clipboardHistoryList)
    }
  }

  useEffect(() => {
    loadClipboardHistory()

    // Main process pushes on every clipboard change; refetch on each signal.
    const unsubscribe = onClipboardChanged(() => {
      loadClipboardHistory()
    })

    return unsubscribe
  }, [])

  async function deleteClipboardHistory(id: number) {
    const deleted = await clipboardAction(ClipboardAction.DELETE_HISTORY, id)
    if (deleted) {
      await loadClipboardHistory()
    }
  }

  return (
    <RootLayout>
      <ClipboardHistoryList
        clipboardHistoryList={clipboardHistoryList}
        onDeleteHistory={deleteClipboardHistory}
      />
    </RootLayout>
  )
}
