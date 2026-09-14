interface RecruitButtonProps {
  onRecruit?: () => void;
  onDesrecruit?: () => void;
}

export default function RecruitButton({
  onRecruit,
  onDesrecruit,
}: RecruitButtonProps) {
  if (onDesrecruit) {
    return (
      <button
        onClick={onDesrecruit}
        className="px-6 py-4 font-bebas text-white text-xl  bg-red-700 border-3 border-transparent duration-150 hover:border-yellow-300 cursor-pointer"
      >
        Decruit
      </button>
    );
  }

  if (onRecruit) {
    return (
      <button
        onClick={onRecruit}
        className="px-6 py-4 font-bebas text-2xl text-white bg-red-700 border-3 border-transparent duration-150 hover:border-yellow-300 cursor-pointer"
      >
        Recruit
      </button>
    );
  }
}
