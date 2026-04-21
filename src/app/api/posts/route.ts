import { Scraper } from "@the-convocation/twitter-scraper";

const scrapper = new Scraper();

export async function POST(request: Request) {
  const { url } = await request.json();
  if (!url)
    return new Response(JSON.stringify({ message: "invalid data" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });

  const postId = url.split("status/")[1];

  const tweet = await scrapper.getTweet(postId);

  return new Response(JSON.stringify(tweet), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
