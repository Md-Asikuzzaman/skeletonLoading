import React from "react";
import "./Skeleton.css";

const SkeletonObject = ({ type }) => {
  let classes = type || "skeleton";

  return <div className={`${classes}`}></div>;
};

export default SkeletonObject;
