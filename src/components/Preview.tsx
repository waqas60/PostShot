import TweetComponent, { TweetComponentType } from "./TweetComponent";
import Customization from "./Customization";
import { useCustomizationStore } from "@/store/customizationStore";
import Adjustment from "./Adjustment";

type PreviewProps = {
  post: TweetComponentType;
};

export default function Preview({ post }: PreviewProps) {
  const { background } = useCustomizationStore();

  return (
    <div className="w-230">
      <p className="font-bold border-b pb-2  border-neutral-100">Preview</p>

      <div className="flex items-center gap-10 m-10">
        {post && (
          <div
            style={{
              background: background,
            }}
            className="p-10 rounded-2xl overflow-hidden"
          >
            <TweetComponent {...post} />
          </div>
        )}

        {post && <Customization />}
        {post && <Adjustment />}
      </div>
    </div>
  );
}
