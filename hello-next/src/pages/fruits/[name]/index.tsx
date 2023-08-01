import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import path from "path";
import React from "react";

// Run on SERVER SIDE
export const getStaticProps: GetStaticProps = async (context: any) => {
  console.log(context.params.name);
  const fs = require("fs");
  const txt = fs.readFileSync(
    path.join(process.cwd(), "public/robots.txt"),
    "utf8"
  );

  return {
    revalidate: 10, //number of seconds
    props: {
      myFavNum: txt,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  //you can access all node stuff and dynamically generate paths

  return {
    paths: [{ params: { name: "hello" } }, { params: { name: "world" } }],
    fallback: true,
  };
};

const index = (props: any) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>...loading</div>;
  }
  return <div>{`Dynamic - ${props.myFavNum}`}</div>;
};

export default index;
