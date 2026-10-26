import { WindowAction } from '@/types/window-action';
import {
  MinusSquareIcon,
  ResizeIcon,
  XSquareIcon,
} from '@phosphor-icons/react';

export default function NavBar() {
  const { windowAction } = window.electronAPI;

  return (
    <nav className="navbar bg-base-100 shadow-sm sm:p-2 sm:min-h-4 p-1 min-h-2">
      <div className="flex-1">
        <a className="btn btn-ghost sm:text-xl text-sm">daisyUI</a>
      </div>
      <div className="flex-none">
        <button
          className="btn btn-square btn-ghost sm:btn-md btn-sm tooltip tooltip-bottom"
          data-tip={WindowAction.MINIMIZE}
          onClick={() => windowAction(WindowAction.MINIMIZE)}
        >
          <MinusSquareIcon size={32} color="#fac800" />
        </button>
        <button
          className="btn btn-square btn-ghost sm:btn-md btn-sm tooltip tooltip-bottom"
          data-tip={WindowAction.MAXIMIZE}
          onClick={() => windowAction(WindowAction.MAXIMIZE)}
        >
          <ResizeIcon size={32} color="#34c759" />
        </button>
        <button
          className="btn btn-square btn-ghost sm:btn-md btn-sm tooltip tooltip-bottom"
          data-tip={WindowAction.CLOSE}
          onClick={() => windowAction(WindowAction.CLOSE)}
        >
          <XSquareIcon size={32} color="#ff5c5f" />
        </button>
      </div>
    </nav>
  );
}
