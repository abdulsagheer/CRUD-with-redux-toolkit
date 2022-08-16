import React, { useState } from "react";
import { Input, Button, Card, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../redux/features/postSlice";
import LoadingCard from "./LoadingCard";

const CreatePost = () => {
  const [values, setValues] = useState({ title: "", body: "" });
  const { post, loading } = useSelector((state) => ({ ...state.app }));
  const [showPost, setShowPost] = useState(false);
  const { title, body } = values;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({ values }));
    setValues({ title: "", body: "" });
    setShowPost(true);
  };
  console.log(values);

  const showPostBlog = () => {
    return (
      <>
        {loading ? (
          <LoadingCard count={1} />
        ) : (
          <Card type="inner" title={post[0].title}>
            <p>User Id: {post[0].id}</p>
            <p>User Description: {post[0].body}</p>
          </Card>
        )}
      </>
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Create Post</h1>
        <Input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setValues({ ...values, title: e.target.value })}
          style={{ width: "400px" }}
        />
        <br />
        <br />
        <Input.TextArea
          type="text"
          placeholder="Enter body"
          value={body}
          onChange={(e) => setValues({ ...values, body: e.target.value })}
          style={{ width: "400px" }}
          size="large"
        />
        <br />
        <br />
        <Space style={{ margin: 10 }}>
          <Button onClick={() => navigate("/")}>Go Back</Button>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Space>
      </form>
      <br />
      <br />
      {showPost && <div>{showPostBlog()}</div>}
    </div>
  );
};

export default CreatePost;
