import { app } from 'electron'
import path from 'node:path'
import { DatabaseSync } from 'node:sqlite'

const userDataDir = app.getPath('userData')

export const database = new DatabaseSync(
  path.join(userDataDir, 'sync-paste.db'),
)

database.exec(`
  CREATE TABLE IF NOT EXISTS clipboard_history (
    id INTEGER PRIMARY KEY,
    content TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )
`)
