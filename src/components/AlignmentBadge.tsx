import type { alignment } from "../types/CharacterTypes";

interface AlignmentBadgeProps {
  content: alignment;
  unknownContent: string;
}

export default function AlignmentBadge({
  content,
  unknownContent,
}: AlignmentBadgeProps) {
  const alignmentStyles = {
    good: "p-2.5 bg-blue-400 text-center",
    bad: "p-2.5 bg-red-700 text-center",
    neutral: "p-2.5 bg-slate-400 text-center",
    null: "p-2.5 bg-slate-700 text-center",
    "-": "p-2.5 bg-slate-700 text-center",
  };
  return (
    <div className={alignmentStyles[content]}>
      {content === null || content === "-" ? unknownContent : content}
    </div>
  );
}
