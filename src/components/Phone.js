import React, { useEffect, useState } from "react";
import SkeletonEmail from "./Skeleton/SkeletonEmail";

const Phone = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const allData = async () => {
        var datas = await (
          await fetch("https://jsonplaceholder.typicode.com/comments")
        ).json();

        setData(datas);
      };
      allData();
    }, 0);
  }, [data]);
  return (
    <>
      <h1>All Email</h1>

      {/* When the data is loading */}

      {!data && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((d) => <SkeletonEmail key={d} />)}

      {/* After the data loading */}

      {data &&
        data.map((d) => (
          <div className="card" key={d.id}>
            <h3>{d.name}</h3>
            <p>{d.email}</p>
          </div>
        ))}
    </>
  );
};

export default Phone;
