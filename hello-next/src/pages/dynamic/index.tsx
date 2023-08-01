import { GetStaticProps } from "next";
import path from "path";
import React from "react";

// Run on SERVER SIDE
export const getStaticProps: GetStaticProps = async (context) => {
  const fs = require("fs");
  const txt = fs.readFileSync(
    path.join(process.cwd(), "public/robots.txt"),
    "utf8"
  );

  return {
    revalidate: 10,//number of seconds
    props: {
      myFavNum: txt,
    },
  };
};

const Dynamic = (props: any) => {
  return <div>{`Dynamic - ${props.myFavNum}`}</div>;
};

export default Dynamic;
