import {
  MinusSquareIcon,
  ResizeIcon,
  XSquareIcon,
} from '@phosphor-icons/react';

export default function NavBar() {
  return (
    <nav className="navbar bg-base-100 shadow-sm sm:p-2 sm:min-h-4 p-1 min-h-2">
      <div className="flex-1">
        <a className="btn btn-ghost sm:text-xl text-sm">daisyUI</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost sm:btn-md btn-sm">
          <MinusSquareIcon size={32} color="#fac800" />
        </button>
        <button className="btn btn-square btn-ghost sm:btn-md btn-sm">
          <ResizeIcon size={32} color="#34c759" />
        </button>
        <button className="btn btn-square btn-ghost sm:btn-md btn-sm">
          <XSquareIcon size={32} color="#ff5c5f" />
        </button>
      </div>
    </nav>
  );
}
