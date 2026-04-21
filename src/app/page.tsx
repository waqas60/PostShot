import Button from "@/components/Button";
import Hero from "@/components/Hero";
import Input from "@/components/Input";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex  mt-10  flex-col gap-10 max-w-110 mx-auto">
      <h1 className="text-5xl  tracking-wide text-center">
        Turn any tweet into{" "}
        <span className="text-orange-500">a stunning image.</span>
      </h1>

      <Hero />
    </div>
  );
}
