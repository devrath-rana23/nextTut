// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  num: number;
};

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ num: Math.round(Math.random() * 10000) });
}
