import TweetComponent, { TweetComponentType } from "./TweetComponent";
import Customization from "./Customization";
import { useCustomizationStore } from "@/store/customizationStore";
import Adjustment from "./Adjustment";

type PreviewProps = {
  post: TweetComponentType;
};

export default function Preview({ post }: PreviewProps) {
  const { background, padding } = useCustomizationStore();

  return (
    <div className="w-250 mt-10">
      <p className="font-bold border-b pb-2 border-neutral-200 text-sm">Preview</p>

      <div className="flex items-center gap-5 m-10">
        {post && (
          <div
            style={{
              background: background,
              padding: `${padding}px`,
            }}
            className="rounded-2xl overflow-hidden h-full w-150"
          >
            <TweetComponent {...post} />
          </div>
        )}

        {post && <Customization />}
        {/* {post && <Adjustment />} */}
      </div>
    </div>
  );
}
