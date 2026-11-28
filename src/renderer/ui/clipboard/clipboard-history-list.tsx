import { ClipboardHistory } from '@/types/clipboard-history'

type ClipboardHistoryListProps = {
  clipboardHistoryList: ClipboardHistory[]
}

export default function ClipboardHistoryList({
  clipboardHistoryList,
}: ClipboardHistoryListProps) {
  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
        Clipboard History
      </li>

      {clipboardHistoryList.map((item) => (
        <ClipboardHistoryListItem key={item.id} clipboardHistory={item} />
      ))}
    </ul>
  )
}

type ClipboardHistoryListItemProps = {
  clipboardHistory: ClipboardHistory
}

function ClipboardHistoryListItem({
  clipboardHistory,
}: ClipboardHistoryListItemProps) {
  const content =
    clipboardHistory.content.length > 50
      ? clipboardHistory.content.slice(0, 50) + '...'
      : clipboardHistory.content

  return (
    <li className="list-row">
      <div className="list-col-grow">
        <div>{content}</div>
        <div className="text-xs uppercase font-semibold opacity-60">
          {clipboardHistory.id} -{' '}
          {parseAndDisplayDateTime(clipboardHistory.created_at)}
        </div>
      </div>
      <button className="btn btn-square btn-ghost">
        <svg
          aria-label="Play"
          className="size-[1.2em]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            fill="none"
            stroke="currentColor"
          >
            <path d="M6 3L20 12 6 21 6 3z"></path>
          </g>
        </svg>
      </button>
    </li>
  )
}

// SQLite's CURRENT_TIMESTAMP is UTC without a timezone suffix, which JS would parse as local time.
// Mark it as UTC so it renders in the correct local time.
function parseAndDisplayDateTime(timestamp: string) {
  return new Date(`${timestamp.replace(' ', 'T')}Z`).toLocaleString()
}
