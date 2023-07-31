import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export const KEY = "dsfwsefgergergergergedfgvsdgfeyheryjefdghdfhjerdtyeryjethdgjdfhj";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.body) {
    res.statusCode = 400;
    res.end("error");
    return;
  }

  const { username, password } = req.body;

  res.json({
    token: jwt.sign(
      {
        username,
        admin: username === "admin" && password === "admin",
      },
      KEY
    ),
  });
}
