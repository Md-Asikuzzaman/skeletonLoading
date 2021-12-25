import React, { useEffect, useState } from "react";
import SkeletonUser from "./Skeleton/SkeletonUser";

const Users = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const allData = async () => {
        var datas = await (
          await fetch("https://jsonplaceholder.typicode.com/posts")
        ).json();

        setData(datas);
      };
      allData();
    }, 0);
  }, [data]);
  return (
    <>
      <h1>All Users</h1>

      {/* When the data is loading */}

      {!data && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((d) => <SkeletonUser key={d} />)}

      {/* After the data loading */}

      {data &&
        data.map((d) => (
          <div className="card" key={d.id}>
            <h3>{d.title}</h3>
            <p>{d.body}</p>
          </div>
        ))}
    </>
  );
};

export default Users;
