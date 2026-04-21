import { Scraper } from "@the-convocation/twitter-scraper";

const scrapper = new Scraper();

export async function POST(request: Request) {
  const { url } = await request.json();
  if (!url)
    return new Response(JSON.stringify({ message: "invalid data" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });

  const postId = url.split("status/")[1].split("?")[0];

  //   console.log(postId);

  const tweet = await scrapper.getTweet(postId);
  const user = await scrapper.getProfile(tweet?.username!);

  return new Response(
    JSON.stringify({
      html: tweet?.html,
      avatar: user.avatar,
      name: user.name,
      username: user.username,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
}
