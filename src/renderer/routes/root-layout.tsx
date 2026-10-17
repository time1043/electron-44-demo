import { ReactNode } from 'react';

import BreakpointIndicator from '@/renderer/ui/breakpoint-indicator';
import NavBar from '@/renderer/ui/nav-bar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      <div className="p-2">{children}</div>
      <BreakpointIndicator />
    </>
  );
}
