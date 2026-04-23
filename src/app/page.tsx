import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="mt-10 flex flex-col gap-10">
      <div className="flex max-w-400 flex-col items-center gap-6 text-center">
        <h1 className="text-6xl leading-tight font-bold">
          Turn any tweet into
          <br />
          <span className="text-orange-500">a stunning image</span>
        </h1>
        <p className="w-110 text-sm tracking-wide text-neutral-500">
          Beautiful screenshots from any public tweet for LinkedIn, Instagram,
          and everywhere
        </p>
      </div>

      <Hero />
    </div>
  );
}
