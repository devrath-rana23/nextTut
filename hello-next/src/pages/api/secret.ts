import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { KEY } from "./login";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.body) {
    res.statusCode = 400;
    res.end("error");
    return;
  }

  const { token } = req.body;
  const data: any = jwt.verify(token, KEY);

  res.json({
    secretAdminCode: data?.admin ? 12345 : false,
  });
}
