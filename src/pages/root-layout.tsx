import { ReactNode } from 'react';
import NavBar from '../ui/nav-bar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      <div className="p-2">{children}</div>
    </>
  );
}
