import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa6";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useCustomizationStore } from "@/store/customizationStore";

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
      `<a href="$1" target="_blank" style="color:#1d9bf0; text-decoration:underline;">$1</a>`,
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
      }}
      className={`select:none font-tweet overflow-hidden px-6 pt-5 pb-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] ${themeStyle}  `}
    >
      <div className="flex items-center gap-2">
        <Image
          width={40}
          height={40}
          alt={tweet.name}
          src={tweet.avatar}
          className="rounded-full"
        />
        <div>
          <p className="flex items-center gap-1 text-sm font-semibold">
            {tweet.name}
            {tweet.verified && (
              <RiVerifiedBadgeFill className="text-sm text-[#1d9bf0]" />
            )}
          </p>
          <p className="text-xs text-[#536471]">@{tweet.username}</p>
        </div>
      </div>

      <div
        className="mt-3 leading-relaxed"
        style={{ fontSize: fontSize ? `${fontSize}px` : "14px" }}
        dangerouslySetInnerHTML={{ __html: formattedText }}
      />

      {tweet.media && tweet.media.length > 0 && (
        <div className="mt-3 overflow-hidden rounded-xl">
          {tweet.media.map((m, i) => (
            <Image
              width={840}
              height={500}
              key={i}
              src={m.url}
              alt=""
              className="h-auto w-full rounded-lg"
            />
          ))}
        </div>
      )}

      <p className="my-4 border-y border-[#00000014] py-2 text-xs text-[#536471]">
        {new Date(tweet.date).toLocaleString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </p>

      <div className="flex items-center gap-4 text-xs text-[#536471]">
        <p className="flex items-center gap-1">
          <AiOutlineHeart className="text-base" />
          {tweet.likes}
        </p>
        <p className="flex items-center gap-1">
          <BiMessage className="text-base" />
          {tweet.replies}
        </p>
        <p className="flex items-center gap-1">
          <FaRetweet className="text-base" />
          {tweet.retweets}
        </p>
      </div>
    </div>
  );
}
