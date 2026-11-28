import { ClipboardAction } from '@/types/clipboard-action'
import { ClipboardHistory } from '@/types/clipboard-history'
import { useEffect, useState } from 'react'
import RootLayout from './root-layout'

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
      <ul>
        {clipboardHistoryList.map((history) => (
          <li className="p-2" key={history.id}>
            {history.created_at}: {history.content}
          </li>
        ))}
      </ul>
    </RootLayout>
  )
}
