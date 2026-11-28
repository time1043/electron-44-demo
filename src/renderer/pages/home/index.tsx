import { ClipboardAction } from '@/types/clipboard-action'
import { ClipboardHistory } from '@/types/clipboard-history'
import { useEffect, useState } from 'react'
import RootLayout from './root-layout'
import ClipboardHistoryList from '@/renderer/ui/clipboard/clipboard-history-list'

export default function Home() {
  const [clipboardHistoryList, setClipboardHistoryList] = useState<
    ClipboardHistory[]
  >([])

  async function loadClipboardHistory() {
    const clipboardHistoryList = await window.electronAPI.clipboardAction(
      ClipboardAction.GET_HISTORIES,
    )

    if (clipboardHistoryList) {
      setClipboardHistoryList(clipboardHistoryList)
    }
  }

  useEffect(() => {
    loadClipboardHistory()
  }, [])

  return (
    <RootLayout>
      <ClipboardHistoryList clipboardHistoryList={clipboardHistoryList} />
    </RootLayout>
  )
}
