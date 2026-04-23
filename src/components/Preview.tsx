import TweetComponent, { TweetComponentType } from "./TweetComponent";
import Customization from "./Customization";
import { useCustomizationStore } from "@/store/customizationStore";
import Adjustment from "./Adjustment";
import { useCallback, useRef } from "react";
import { toBlob, toPng } from "html-to-image";
import { useGradient } from "@/store/gradientStore";
import { toast } from "sonner";

type PreviewProps = {
  post: TweetComponentType;
};

export default function Preview({ post }: PreviewProps) {
  const { background, padding, tweetParentWidth, solidColor } =
    useCustomizationStore();
  const { gradient } = useGradient();
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
      toast.error("Failed to download image");
    }
  };

  const copyImage = async () => {
    if (!ref.current) return;

    await new Promise((resolve) => setTimeout(resolve, 50));

    try {
      const blob = await toBlob(ref.current, {
        cacheBust: true,
        pixelRatio: 3,
      });

      if (blob) {
        const item = new ClipboardItem({ "image/png": blob });
        await navigator.clipboard.write([item]);
        toast.success("Image copied to clipboard!");
      }
    } catch (err) {
      // console.error("Copy failed", err);
      toast.error("Failed to copy image");
    }
  };

  return (
    <div className="mx-auto mt-10 w-200">
      <p className="border-b border-neutral-200 pb-2 text-sm font-bold dark:border-neutral-700">
        Preview
      </p>

      <div className="m-7 grid grid-cols-[400px_1fr] gap-10">
        <div>
          {post && (
            <div className="w-100">
              <Customization />
            </div>
          )}
          <div className="mt-10 flex justify-center gap-5">
            <button
              onClick={downloadImage}
              className="cursor-pointer rounded-lg bg-[#f97316] px-6 py-2 text-xs font-bold text-white transition-all duration-200 hover:bg-orange-500"
            >
              Download PNG
            </button>
            <button
              onClick={copyImage}
              className="cursor-pointer rounded-lg bg-neutral-700 px-6 py-2 text-center text-xs font-bold text-white transition-all duration-200 hover:bg-neutral-800"
            >
              Copy PNG
            </button>
          </div>
        </div>
        {post && (
          <div className="flex flex-col items-center">
            <div className="max-w-full overflow-auto p-4">
              <div
                ref={ref}
                style={{
                  width: `${tweetParentWidth}px`,
                  background: gradient ? background : solidColor,
                  padding: `${padding}px`,
                }}
                className="overflow-hidden rounded-2xl shadow-2xl transition-all duration-200"
              >
                <TweetComponent {...post} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
