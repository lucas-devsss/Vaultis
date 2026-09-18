export default function SkeletonCard() {
  return (
    <article className="flex flex-col max-h-166.25  bg-slate-950 text-white box-border animate-pulse">
      <div className="w-full min-h-50 bg-slate-950"></div>
      <div className="p-2.5 flex flex-col flex-1 min-h-0 box-border justify-between">
        <div className="mb-2.5 w-1.5 h-1.5"></div>
        <div className="flex flex-1 flex-col gap-6 justify-between ">
          <div className="flex flex-col gap-3">
            <div className="p-2.5 bg-slate-900"></div>
            <div className="p-2.5 bg-slate-900"></div>
            <div className="p-2.5 bg-slate-900"></div>
          </div>
          <div className="flex flex-col gap-2.5 shrink-0">
            <button className="px-6 py-4 bg-slate-900 "></button>
            <button className="px-6 py-4 bg-slate-900 "></button>
          </div>
        </div>
      </div>
    </article>
  );
}
