import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { API_BASE_URL } from "./constant";

const postTodo = (data: any) =>
  axios({
    method: "POST",
    url: API_BASE_URL + "posts",
    data,
  });

const AddPost = () => {
  const queryClient = useQueryClient();

  const createPost = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        backgroundColor: "GrayText",
        padding: "8px 16px",
      }}
    >
      <form
        style={{
          display: "flex",
          alignItems: "center",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          const titleInput: any = document.querySelector("#title");

          createPost.mutate({
            title: titleInput?.value,
          });
        }}
      >
        <input
          style={{
            height: "26px",
          }}
          name="title"
          id="title"
        />
        <button
          style={{
            padding: "4px",
            borderRadius: "4px",
            marginLeft: "8px",
          }}
          disabled={createPost.isPending}
          type="submit"
        >
          Create Post
        </button>
      </form>

      {!!createPost.error && <span>Error: {createPost.error.message}</span>}
    </div>
  );
};

export default AddPost;
