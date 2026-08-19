interface BadgeComponentProps {
  content: string;
  unknownContent: string;
}

export default function BadgeComponent({
  content,
  unknownContent,
}: BadgeComponentProps) {
  return (
    <div className="border-slate-700 border-2 p-2.5 text-sm text-center">
      {content === null || content === "-" ? unknownContent : content}
    </div>
  );
}
