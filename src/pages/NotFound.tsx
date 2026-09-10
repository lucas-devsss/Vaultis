import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="h-dvh w-dvw bg-slate-950 flex flex-col md:flex-row-reverse md:justify-around md:items-center  p-10 box-border">
      <div>
        <img src="/error404.svg" alt="" width={600} />
      </div>
      <div className="box-border">
        <p className="font-bebas text-white text-5xl">
          Ops, it seems you're lost
        </p>
        <p className="font-inter text-slate-300 text-xl">
          Click below to return recruiting more recruits
        </p>
        <Link
          to={"/"}
          className=" box-border inline-block mt-3 px-4 py-5 bg-purple-700 text-white font-inter text-2xl"
        >
          Search for recruits
        </Link>
      </div>
    </section>
  );
}
