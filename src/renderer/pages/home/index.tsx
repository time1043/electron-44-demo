import ClipboardHistoryList from '@/renderer/ui/clipboard/clipboard-history-list'
import { ClipboardAction } from '@/types/clipboard-action'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import RootLayout from './root-layout'

const { clipboardAction } = window.electronAPI
const CLIPBOARD_HISTORIES_KEY = ['clipboard-histories'] as const

export default function Home() {
  const queryClient = useQueryClient()

  async function loadClipboardHistory() {
    const clipboardHistoryList = await clipboardAction(
      ClipboardAction.GET_HISTORIES,
    )

    if (Array.isArray(clipboardHistoryList)) {
      return clipboardHistoryList
    }
  }

  const { data: clipboardHistoryList } = useQuery({
    queryKey: CLIPBOARD_HISTORIES_KEY,
    queryFn: loadClipboardHistory,
  })

  async function deleteClipboardHistory(id: number) {
    const deleted = await clipboardAction(ClipboardAction.DELETE_HISTORY, id)
    if (deleted) {
      queryClient.invalidateQueries({ queryKey: CLIPBOARD_HISTORIES_KEY })
    }
  }

  return (
    <RootLayout>
      <ClipboardHistoryList
        clipboardHistoryList={clipboardHistoryList ?? []}
        onDeleteHistory={deleteClipboardHistory}
      />
    </RootLayout>
  )
}
