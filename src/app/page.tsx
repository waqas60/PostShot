import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ToggleTheme from "@/components/ToggleTheme";
import { useTheme } from "next-themes";
import { Toaster, toast } from "sonner";

export default function Home() {
  return (
    <div className="relative">
      <Toaster />

      <h1 className="absolute top-5 left-5 text-sm text-neutral-400">
        POSTSHOT
      </h1>
      <ToggleTheme />
      <div className="mt-20 flex flex-col gap-10">
        <div className="flex max-w-400 flex-col items-center gap-6 text-center">
          <h1 className="text-6xl leading-tight font-bold">
            Turn any tweet into
            <br />
            <span className="text-orange-400">a stunning image</span>
          </h1>
          <p className="w-110 text-sm tracking-wide text-neutral-500">
            Beautiful screenshots from any public tweet for LinkedIn, Instagram,
            and everywhere
          </p>
        </div>

        <Hero />

        <Footer />
      </div>
    </div>
  );
}
