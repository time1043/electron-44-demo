export default function BreakpointIndicator() {
  return (
    <div className="fixed bottom-4 right-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-mono px-3 py-1.5 rounded-full shadow-lg">
      <span className="sm:hidden">xs</span>
      <span className="hidden sm:inline md:hidden">sm</span>
      <span className="hidden md:inline lg:hidden">md</span>
      <span className="hidden lg:inline xl:hidden">lg</span>
      <span className="hidden xl:inline">xl</span>
    </div>
  );
}
