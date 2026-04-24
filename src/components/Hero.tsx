"use client";
import { useRef, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import axios from "axios";
import { BarLoader } from "react-spinners";
import Preview from "./Preview";
import { useTheme } from "next-themes";
import HowItWorks from "./HowItWorks";

export default function Hero() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [post, setPost] = useState<any>();
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();

  const fetchPost = async () => {
    if (!inputRef.current?.value) return;

    const url = inputRef.current.value;
    setLoading(true);

    try {
      const response = await axios.post("/api/posts", { url });
      const data = response.data;
      if (data) setPost(data);
    } catch (error) {
      console.error("Error fetching post:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-6 px-4">
      <div className="flex w-full flex-col items-center justify-center gap-3 sm:max-w-xl sm:flex-row sm:gap-2">
        <Input ref={inputRef} />

        <div className="w-full sm:w-auto">
          <Button onclick={fetchPost} />
        </div>
      </div>

      <BarLoader
        loading={loading}
        width={150}
        className="mx-auto mt-10"
        color={theme === "dark" ? "#fff" : "#000"}
      />

      {post && (
        <div className="flex w-full justify-center overflow-hidden">
          <Preview post={post} />
        </div>
      )}

      {!post && !loading && <HowItWorks />}
    </div>
  );
}
