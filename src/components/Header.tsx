interface HeaderProps {
  children: React.ReactNode;
}

export default function HeaderComponent({ children }: HeaderProps) {
  return (
    <header className="grid justify-between items-center grid-cols-2 sm:grid-flow-row sm:gap-13.5 sm:grid-cols-[auto_minmax(320px,1fr)_auto] gap-6 fixed p-8 bg-slate-800 w-full">
      {children}
    </header>
  );
}
