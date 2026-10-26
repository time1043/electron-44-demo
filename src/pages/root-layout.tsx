import BreakpointIndicator from '@/ui/breakpoint-indicator';
import NavBar from '@/ui/nav-bar';
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
