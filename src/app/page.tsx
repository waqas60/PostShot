import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ToggleTheme from "@/components/ToggleTheme";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <>
      {" "}
      <div className="relative min-h-screen px-4 sm:px-6 lg:px-8">
        <Toaster />

        <h1 className="absolute top-5 left-5 text-xs font-bold tracking-widest text-neutral-400 sm:text-sm">
          POSTSHOT
        </h1>

        <ToggleTheme />

        <div className="mx-auto mt-20 flex max-w-5xl flex-col gap-10 md:mt-32">
          <div className="flex flex-col items-center gap-6 text-center">
            <h1 className="max-w-5xl text-4xl leading-tight font-bold tracking-tight sm:text-5xl md:text-6xl">
              Turn Any Tweet Into
              <br />
              <span className="text-orange-400">a Professional Visual</span>
            </h1>

            <p className="w-full max-w-md text-sm tracking-wide text-neutral-500 sm:text-base">
              Transform tweets into high-quality visuals optimized for sharing
              across the web
            </p>
          </div>

          <Hero />

          <Footer />
        </div>
      </div>
      <Analytics />
    </>
  );
}
