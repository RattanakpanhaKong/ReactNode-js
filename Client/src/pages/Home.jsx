import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {

  let navigate = useNavigate()

  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect( () => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);
  return (
    <div className="px-[450px]">
      {listOfPosts.map((value, key) => {
        return (
          <div
            id="post"
            onClick={() => {
              navigate(`/post/${value.id}`)
            }}
            className="border border-1 border-black my-6 text-center rounded-lg bg-blue-500"
          >
            <div id="title" className="text-white p-2">
              {value.title}
            </div>
            <div
              id="body"
              className="h-24 bg-white flex items-center justify-center"
            >
              <div>{value.postText}</div>
            </div>
            <div id="username" className="text-white p-2">
              {value.username}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
