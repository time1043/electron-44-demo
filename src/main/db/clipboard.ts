import { database } from './db'

export const insertClipboardHistory = database.prepare(
  'INSERT INTO clipboard_history (content) VALUES (?)',
)

export const queryClipboardHistory = database.prepare(
  'SELECT * FROM clipboard_history ORDER BY created_at DESC',
)

export const deleteClipboardHistory = database.prepare(
  'DELETE FROM clipboard_history WHERE id = ?',
)
