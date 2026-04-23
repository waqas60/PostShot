import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex mt-10 flex-col gap-10">
      <div className="max-w-400 flex flex-col gap-6 items-center  text-center">
        <h1 className="text-6xl font-bold leading-tight ">
          Turn any tweet into
          <br />
          <span className="text-orange-500">a stunning image</span>
        </h1>
        <p className="w-110 text-sm text-neutral-500 tracking-wide">
          Beautiful screenshots from any public tweet for LinkedIn, Instagram,
          and everywhere
        </p>
      </div>

      <Hero />
    </div>
  );
}
