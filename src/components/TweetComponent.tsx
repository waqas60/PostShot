import { HtmlProps } from "next/dist/shared/lib/html-context.shared-runtime";
import Image from "next/image";
import React from "react";
import parser from "html-react-parser";

export type TweetComponentType = {
  avatar: string;
  name: string;
  username: string;
  html: string;
};

export default function TweetComponent(tweet: TweetComponentType) {
  const formattedHTML = tweet.html.replace(
    /@(\w+)/g,
    `<span style="color:#1d9bf0;">@$1</span>`,
  );

  return (
    <div>
      <Image width={20} height={20} alt="im" src={tweet.avatar} />
      <p>{tweet.name}</p>
      <p>{tweet.username}</p>
      {parser(formattedHTML)}
    </div>
  );
}
