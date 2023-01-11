import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <Link href={"/"}>Home</Link>
    </div>
  );
};

export default Error;
