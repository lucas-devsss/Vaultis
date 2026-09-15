import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="h-dvh w-dvw bg-slate-950 flex flex-col md:flex-row-reverse md:justify-around md:items-center  p-10 ">
      <div>
        <img src="/error404.svg" alt="" width={600} />
      </div>
      <div>
        <p className="font-bebas text-white text-5xl">
          Ops, it seems you're lost
        </p>
        <p className="font-inter text-slate-300 text-xl">
          Click below to return recruiting more recruits
        </p>
        <Link
          to={"/"}
          className=" inline-block mt-4 px-8 py-4 font-bebas text-2xl text-white bg-purple-700 rounded-md shadow-lg shadow-fuchsia-800/40 duration-300 hover:bg-purple-500 hover:shadow-fuchsia-500/70 active:scale-95 cursor-pointer"
        >
          Search for recruits
        </Link>
      </div>
    </section>
  );
}
