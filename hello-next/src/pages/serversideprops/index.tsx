import { GetServerSideProps, GetStaticProps } from "next";
import path from "path";
import React from "react";

// Run on SERVER SIDE
export const getServerSideProps: GetServerSideProps = async (context) => {

  return {
    props: {
      myFavNum: Math.random(),
    },
  };
};

const Dynamic = (props: any) => {
  return <div>{`Dynamic - ${props.myFavNum}`}</div>;
};

export default Dynamic;
