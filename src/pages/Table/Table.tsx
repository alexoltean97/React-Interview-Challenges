import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Posts from "../../types/posts";

const Table: React.FC = () => {
  const endpoint: string = "https://jsonplaceholder.typicodeom/";
  const [posts, setPosts] = useState<Posts[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    dummyData();
  }, []);

  const dummyData = async () => {
    try {
      setLoading(true);
      const response: AxiosResponse<Posts[]> = await axios.get(
        `${endpoint}/posts`
      );
      setPosts(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        setErrorMsg(error.message);
      } else {
        setErrorMsg("An unexpected error occurred");
      }
    }
  };

  return (
    <div>
      <h2>Table</h2>
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : errorMsg ? (
        <div>
          <h1>{errorMsg}</h1>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>User Id</th>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.slice(0, 15).map((post) => (
              <tr key={post.id}>
                <td>{post.userId}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
