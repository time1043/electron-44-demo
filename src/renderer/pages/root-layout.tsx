import BreakpointIndicator from '@/renderer/ui/breakpoint-indicator';
import NavBar from '@/renderer/ui/nav-bar';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      <div className="p-2">{children}</div>
      <BreakpointIndicator />
    </>
  );
}
