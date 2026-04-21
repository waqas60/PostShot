"use client";
import React, { useRef, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import axios from "axios";
import TweetComponent, { TweetComponentType } from "./TweetComponent";
import { BarLoader, BounceLoader } from "react-spinners";

export default function Hero() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [post, setPost] = useState<TweetComponentType>();
  const [loading, setLoading] = useState(false);

  const fetchPost = async () => {
    if (!inputRef.current) {
      console.log("input in empty");
      return;
    }

    const url = inputRef.current.value;
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:3000/api/posts", {
        url: url,
      });
      //   console.log(response);
      const data = response.data;
      if (!data) {
        console.log(response.data);
        return;
      }
      setPost(data);
      setLoading(false);
      //   inputRef.current.value = "";
    } catch (error) {}
  };

  return (
    <div>
      <div className="flex justify-center gap-4 items-center w-full">
        <Input ref={inputRef} />

        <Button onclick={fetchPost} />
      </div>

      {/* {JSON.stringify(post.user)} */}

      <BarLoader loading={loading} className="mx-auto mt-20 " />

      {post && (
        <TweetComponent
          avatar={post.avatar}
          name={post.name}
          username={post.username}
          html={post.html}
          date={post.date}
          likes={post.likes}
          replies={post.replies}
          retweets={post.retweets}
        />
      )}
    </div>
  );
}
