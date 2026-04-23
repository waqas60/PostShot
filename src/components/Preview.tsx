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
    <div className="mt-10 w-250">
      <p className="border-b border-neutral-200 pb-2 text-sm font-bold">
        Preview
      </p>

      <div className="m-10 flex  gap-20 justify-center">
        {post && (
          <div
            style={{
              background: background,
              padding: `${padding}px`,
            }}
            className="w-120 overflow-hidden rounded-2xl"
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
