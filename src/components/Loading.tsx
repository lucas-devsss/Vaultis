export default function Loading() {
  return (
    <div className="w-full h-25 flex justi-center">
      <div className="flex justify-center items-center gap-2 py-4">
        <div className="w-3.5 h-3.5 bg-blue-400 animate-[morph_1.8s_ease-in-out_infinite]" />
        <div className="w-3.5 h-3.5 bg-blue-400 animate-[morph_1.8s_ease-in-out_0.3s_infinite]" />
        <div className="w-3.5 h-3.5 bg-blue-400 animate-[morph_1.8s_ease-in-out_0.6s_infinite]" />
      </div>
    </div>
  );
}
