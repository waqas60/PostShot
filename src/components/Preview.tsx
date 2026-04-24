import TweetComponent, { TweetComponentType } from "./TweetComponent";
import Customization from "./Customization";
import { useCustomizationStore } from "@/store/customizationStore";
import { useRef } from "react";
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
      toast.error("Failed to copy image");
    }
  };

  return (
    <div className="mx-auto mt-10 w-full max-w-6xl px-4">
      <p className="border-b border-neutral-200 pb-2 text-sm font-bold dark:border-neutral-700">
        Preview
      </p>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[380px_1fr]">
        <div className="flex flex-col gap-8">
          {post && (
            <div className="w-full">
              <Customization />
            </div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <button
              onClick={downloadImage}
              className="flex-1 cursor-pointer rounded-lg bg-[#f97316] px-6 py-3 text-xs font-bold text-white transition-all duration-200 hover:bg-orange-500 sm:flex-none"
            >
              Download PNG
            </button>
            <button
              onClick={copyImage}
              className="flex-1 cursor-pointer rounded-lg bg-neutral-700 px-6 py-3 text-center text-xs font-bold text-white transition-all duration-200 hover:bg-neutral-800 sm:flex-none"
            >
              Copy PNG
            </button>
          </div>
        </div>

        {post && (
          <div className="flex w-full flex-col items-center justify-start overflow-hidden">
            <div className="w-full overflow-x-auto pb-4">
              <div className="flex min-w-max justify-center p-2">
                <div
                  ref={ref}
                  style={{
                    width: `${tweetParentWidth}px`,
                    background: gradient ? background : solidColor,
                    padding: `${padding}px`,
                  }}
                  className="overflow-hidden rounded-2xl shadow-xl transition-all duration-200"
                >
                  <TweetComponent {...post} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
