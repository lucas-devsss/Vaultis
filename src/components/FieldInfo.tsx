interface InfoComponentProps {
  title: string;
  content: string | null;
}

export default function FieldInfo({ title, content }: InfoComponentProps) {
  const unknownContent = `no ${title} found.`;

  return (
    <div>
      <p className="text-slate-500 font-bebas text-2xl ">{title}</p>
      <p className="text-slate-300 text-[20px] mb-2 border-b-2 border-slate-400">
        {content === null || content === "" || content === "-"
          ? unknownContent
          : content}
      </p>
    </div>
  );
}
