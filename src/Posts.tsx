import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_BASE_URL } from "./constant";

const getPosts = () =>
  axios({
    method: "GET",
    url: API_BASE_URL + "posts",
  });

const Posts = () => {
  const posts = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return (
    <>
      {posts.error && <span>Error: {posts.error.message}</span>}

      {posts.isLoading ? (
        <div>Loading...</div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {posts?.data?.data?.map((el: any) => (
            <span key={el.id}>{el.title}</span>
          ))}
        </div>
      )}
    </>
  );
};

export default Posts;
