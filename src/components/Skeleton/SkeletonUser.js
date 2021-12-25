import React from "react";
import SkeletonObject from "./SkeletonObject";

import "./Skeleton.css";

const SkeletonUser = () => {
  return (
    <div className="skeleton__wrapper">
      <SkeletonObject type="title" />
      <SkeletonObject type="text" />
      <SkeletonObject type="text" />
      <div className="skeleton__move"></div>
    </div>
  );
};

export default SkeletonUser;
