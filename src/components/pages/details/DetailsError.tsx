import DetailsHeader from "./DetailsHeader";

interface DetailsErrorProps {
  message: string | null;
}

export default function DetailsError({ message }: DetailsErrorProps) {
  return (
    <>
      <DetailsHeader />
      <section className="px-8 py-50 bg-slate-900 min-h-dvh flex flex-col items-center justify-center gap-4 text-center">
        <p className="font-bebas text-4xl text-white">{message}</p>
        <p className="text-slate-400">
          Try again from the search bar above, or head back to your recruits.
        </p>
      </section>
    </>
  );
}
