import {
  MinusSquareIcon,
  ResizeIcon,
  XSquareIcon,
} from '@phosphor-icons/react';

export default function NavBar() {
  return (
    <nav className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <MinusSquareIcon size={32} color="#fac800" />
        </button>
        <button className="btn btn-square btn-ghost">
          <ResizeIcon size={32} color="#34c759" />
        </button>
        <button className="btn btn-square btn-ghost">
          <XSquareIcon size={32} color="#ff5c5f" />
        </button>
      </div>
    </nav>
  );
}
