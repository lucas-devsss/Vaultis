export default function SkeletonDetails() {
  return (
    <section className="px-8 py-50 bg-slate-900 min-h-dvh flex flex-col gap-8 md:flex-row animate-pulse">
      <div className="w-full max-w-112.5 max-h-137.5 min-h-137.5 bg-slate-950 self-center md:self-auto"></div>

      <div className="flex flex-col w-full gap-4">
        <div className="flex items-center flex-col gap-4 md:flex-row md:justify-between">
          <div className="h-15 w-75 bg-slate-950"></div>
          <div className="h-14 w-40 bg-slate-950"></div>
        </div>

        <div className="flex gap-2.5 justify-center items-center md:justify-start">
          <div className="h-10 w-40 bg-slate-950"></div>
          <div className="h-6 w-20 bg-slate-950"></div>
        </div>

        <div className="border-t-2 border-slate-400 mt-2 flex flex-col gap-4 pt-4">
          <div className="h-5 w-full bg-slate-950"></div>
          <div className="h-5 w-full bg-slate-950"></div>
          <div className="h-5 w-full bg-slate-950"></div>
          <div className="h-5 w-full bg-slate-950"></div>
          <div className="h-5 w-full bg-slate-950"></div>
          <div className="h-5 w-full bg-slate-950"></div>
          <div className="h-5 w-full bg-slate-950"></div>
          <div className="h-5 w-full bg-slate-950"></div>
        </div>
      </div>
    </section>
  );
}
