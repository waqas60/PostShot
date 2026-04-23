import { getTweet } from "react-tweet/api";

export async function POST(request: Request) {
  const { url } = await request.json();

  if (!url) {
    return Response.json({ message: "URL is required" }, { status: 400 });
  }

  const postId = url.split("status/")[1]?.split("?")[0];
  const tweet = await getTweet(postId);

  if (!tweet) {
    return Response.json({ message: "Tweet not found" }, { status: 404 });
  }


  return Response.json({
    url, // tweet link

    avatar: tweet.user.profile_image_url_https,
    name: tweet.user.name,
    username: tweet.user.screen_name,
    verified: tweet.user.is_blue_verified,

    text: tweet.text,
    date: tweet.created_at,

    likes: tweet.favorite_count,
    replies: tweet.conversation_count,
    retweets: tweet.quoted_tweet?.retweet_count,

    media:
      tweet.mediaDetails?.map((m) => ({
        url: m.media_url_https,
      })) ?? [],

    // 👇 ADD THIS (IMPORTANT)
    links:
      tweet.entities?.urls?.map((u: any) => ({
        url: u.url,
        expanded: u.expanded_url,
        display: u.display_url,
      })) ?? [],
  });
}
