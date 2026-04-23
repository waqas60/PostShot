import TweetComponent, { TweetComponentType } from "./TweetComponent";
import Customization from "./Customization";
import { useCustomizationStore } from "@/store/customizationStore";
import Adjustment from "./Adjustment";
import { useCallback, useRef } from "react";
import { toPng } from "html-to-image";

type PreviewProps = {
  post: TweetComponentType;
};

export default function Preview({ post }: PreviewProps) {
  const { background, padding, tweetParentWidth } = useCustomizationStore();
  const ref = useRef<HTMLDivElement>(null);

  const downloadImage = async () => {
    if (!ref.current) return;

    await new Promise((resolve) => setTimeout(resolve, 100));
    try {
      const dataUrl = await toPng(ref.current, {
        cacheBust: true,
        pixelRatio: 3,
      });

      const link = document.createElement("a");
      link.download = "tweet.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Capture failed", err);
    }
  };

  return (
    <div className="mt-10">
      <p className="border-b border-neutral-200 pb-2 text-sm font-bold dark:border-neutral-700">
        Preview
      </p>

      {post && (
        <div className="m-10 flex gap-10">
          <div
            ref={ref}
            style={{
              width: `${tweetParentWidth}px`,
              background: background,
              padding: `${padding}px`,
            }}
            className="overflow-hidden rounded-2xl"
          >
            <TweetComponent {...post} />
          </div>

          <div className="flex gap-5">
            <Customization />
          </div>
        </div>
      )}
      <div className="mb-10 flex justify-center gap-5">
        <button
          onClick={downloadImage}
          className="cursor-pointer rounded-lg bg-[#f97316] px-6 py-2 text-xs font-bold text-white transition-all duration-200 hover:bg-orange-500"
        >
          Download PNG
        </button>
        <button
          onClick={downloadImage}
          className="cursor-pointer rounded-lg bg-neutral-700 px-6 py-2 text-center text-xs font-bold text-white transition-all duration-200 hover:bg-neutral-800"
        >
          Copy PNG
        </button>
      </div>
    </div>
  );
}
