import { kv } from "@vercel/kv";

const images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // pre-downloaded images

export default async function handler(req, res) {
  const user = req.body.user;
  const userKey = `user:${user}:count`;
  const userCount = await kv.get(userKey) || 0;

  if (userCount >= 3) {
    res.status(429).json({ message: "Rate limit exceeded. Try again later." });
    return;
  }

  const randomImage = images[Math.floor(Math.random() * images.length)];
  await kv.set(userKey, userCount + 1, { ex: 3600 }); // expire after 1 hour

  res.status(200).json({ image: randomImage });
}
