import { useRouter } from "next/router";
import React from "react";

const Veggies = () => {
  const router = useRouter();
  const { name } = router.query;
  console.log("name>>>", name);
  return <div>Veggies</div>;
};

export default Veggies;
