import { useRouter } from "next/router";
import React from "react";

const Bricks = () => {
  const router = useRouter();
  const { name } = router.query;
  console.log("name>>>", name);
  return <div>Bricks</div>;
};

export default Bricks;
