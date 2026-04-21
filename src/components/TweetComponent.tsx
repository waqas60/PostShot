import { HtmlProps } from "next/dist/shared/lib/html-context.shared-runtime";
import Image from "next/image";
import React from "react";
import parser from "html-react-parser";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa6";
import { useCustomizationStore } from "@/store/customizationStore";

export type TweetComponentType = {
  avatar: string;
  name: string;
  username: string;
  html: string;
  date: string;
  likes: number;
  replies: number;
  retweets: number;
};

export default function TweetComponent(tweet: TweetComponentType) {
  const formattedHTML = tweet.html.replace(
    /@(\w+)/g,
    `<span style="color:#1d9bf0;">@$1</span>`,
  );
  const { theme } = useCustomizationStore();

  const themeStyle =
    theme === "light"
      ? "bg-white text-neutral-900"
      : "bg-neutral-800 text-white";

  return (
    <div
      className={`z-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] pt-5 px-6 pb-4 rounded-xl ${themeStyle}`}
    >
      <div className="flex gap-2 items-center mb-4">
        <Image
          width={40}
          height={40}
          alt={tweet.name}
          src={tweet.avatar}
          className="rounded-full"
        />
        <div>
          <p className="text-sm font-semibold">{tweet.name}</p>
          <p className="text-xs text-[#536471]">@{tweet.username}</p>
        </div>
      </div>

      <div className="text-xs">{parser(formattedHTML)}</div>

      <p className="text-xs text-[#536471] border-y border-[#00000014] my-4 py-2">
        {new Date(tweet.date).toLocaleString()}
      </p>

      <div className="flex gap-4 items-center text-xs text-[#536471]">
        <p className="flex items-center gap-0.5">
          <AiOutlineHeart />
          {tweet.likes}
        </p>
        <p className="flex items-center gap-0.5">
          <BiMessage />
          {tweet.replies}
        </p>
        <p className="flex items-center gap-0.5">
          <FaRetweet />
          {tweet.retweets}
        </p>
      </div>
    </div>
  );
}
