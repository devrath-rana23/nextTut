import { GetStaticProps } from "next";
import path from "path";
import React from "react";

export const getStaticProps: GetStaticProps = async (context) => {
  const fs = require("fs");
  const txt = fs.readFileSync(
    path.join(process.cwd(), "public/robots.txt"),
    "utf8"
  );

  return {
    props: {
      myFavNum: txt,
    },
  };
};

const Dynamic = (props: any) => {
  return <div>{`Dynamic - ${props.myFavNum}`}</div>;
};

export default Dynamic;
