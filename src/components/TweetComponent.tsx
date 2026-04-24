import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa6";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useCustomizationStore } from "@/store/customizationStore";
import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";

export type TweetComponentType = {
  avatar: string;
  name: string;
  username: string;
  verified?: boolean;
  text: string;
  date: string;
  likes: number;
  replies: number;
  retweets: number;
  url: string;
  media?: { url: string }[];
};

export default function TweetComponent(tweet: TweetComponentType) {
  const { theme, fontSize, width, roundness, scale, opacity, tilt } =
    useCustomizationStore();

  const themeStyle =
    theme === "light"
      ? "bg-white text-neutral-900"
      : "bg-neutral-800 text-white";

  const formattedText = tweet.text
    .replace(/\n/g, "<br/>")
    .replace(
      /(https?:\/\/[^\s]+)/g,
      `<a href="$1" target="_blank" style="color:#1d9bf0; text-decoration:underline;">Show more</a>`,
    )
    .replace(/@(\w+)/g, `<span style="color:#1d9bf0;">@$1</span>`)
    .trim();

  return (
    <div
      style={{
        width: `${width}%`,
        borderRadius: `${roundness}px`,
        scale: `${scale}`,
        opacity: `${opacity}`,
        rotate: `${tilt}deg`,
        transformOrigin: "center center",
      }}
      className={`selection:none font-tweet max-w-full overflow-hidden px-4 py-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-transform duration-200 sm:px-6 sm:pb-6 ${themeStyle}`}
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Image
            width={40}
            height={40}
            alt={tweet.name}
            src={tweet.avatar}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="min-w-0">
            <p className="flex items-center gap-1 truncate text-sm font-semibold">
              {tweet.name}
              {tweet.verified && (
                <RiVerifiedBadgeFill className="shrink-0 text-sm text-[#1d9bf0]" />
              )}
            </p>
            <p className="truncate text-xs text-[#536471]">@{tweet.username}</p>
          </div>
        </div>

        <Link href={tweet.url} target="_blank" className="shrink-0">
          <FaSquareXTwitter size={20} />
        </Link>
      </div>

      <div
        className="mt-3 leading-relaxed wrap-break-word"
        style={{ fontSize: fontSize ? `${fontSize}px` : "14px" }}
        dangerouslySetInnerHTML={{ __html: formattedText }}
      />

      {tweet.media && tweet.media.length > 0 && (
        <div className="mt-3 overflow-hidden rounded-xl border border-[#00000014]">
          {tweet.media.map((m, i) => (
            <Image
              width={840}
              height={500}
              key={i}
              src={m.url}
              alt=""
              className="h-auto w-full object-cover"
            />
          ))}
        </div>
      )}

      <p className="my-4 border-y border-[#00000014] py-2 text-[10px] text-[#536471] sm:text-xs">
        {new Date(tweet.date).toLocaleString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </p>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#536471]">
        <p className="flex items-center gap-1">
          <AiOutlineHeart className="text-base" />
          {tweet.likes.toLocaleString()}
        </p>
        <p className="flex items-center gap-1">
          <BiMessage className="text-base" />
          {tweet.replies.toLocaleString()}
        </p>
        {tweet.retweets && (
          <p className="flex items-center gap-1">
            <FaRetweet className="text-base" />
            {tweet.retweets.toLocaleString()}
          </p>
        )}
      </div>
    </div>
  );
}
