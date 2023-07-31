import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const router = useRouter();
  console.log("router>>>", router);
  const { name, subname } = router.query;
  console.log("name, subname>>>", name, subname);
  const navigateHome = () => {
    router.push("/");
  };
  return (
    <div>
      Subname <div onClick={navigateHome}>Home</div>
    </div>
  );
};

export default index;
