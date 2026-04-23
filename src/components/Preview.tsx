import TweetComponent, { TweetComponentType } from "./TweetComponent";
import Customization from "./Customization";
import { useCustomizationStore } from "@/store/customizationStore";
import Adjustment from "./Adjustment";

type PreviewProps = {
  post: TweetComponentType;
};

export default function Preview({ post }: PreviewProps) {
  const { background, padding, tweetParentWidth } = useCustomizationStore();

  return (
    <div className="mt-10 w-250">
      <p className="border-b border-neutral-200 pb-2 text-sm font-bold dark:border-neutral-700">
        Preview
      </p>

      <div className="m-10 flex justify-center gap-20 ">
        {post && (
          <div
            style={{
              width: `${tweetParentWidth}px`,
              background: background,
              padding: `${padding}px`,
            }}
            className="overflow-hidden rounded-2xl"
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
