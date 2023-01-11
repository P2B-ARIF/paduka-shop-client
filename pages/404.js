import Link from "next/link";
import React from "react";

const error = () => {
  return (
    <div>
      <h1>Not Found Page</h1>
      <Link href={"/"}>Home</Link>
    </div>
  );
};

export default error;
