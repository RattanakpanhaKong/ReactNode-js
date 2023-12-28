import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
import axios from "axios";

const createPost = () => {
    const initialValues = {
        title: "",
        postText: "",
        username: ""
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("You must input the title!"),
        postText: Yup.string().required(),
        username: Yup.string().min(3).max(15).required()
    })

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/posts", data).then((response) => {
            // setListOfPosts(response.data)
            console.log("Post Created Successfully!")
        })
    }
  return (
    <div>
      <div className="flex">
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          <Form className=" items-center justify-center border-2 border-red-500 mx-10 py-2">
            <div className="flex justify-between gap-20 my-2">
              <label>Title: </label>
              <ErrorMessage name="title" component="span" className="text-red-500"/>
              <Field name="title" className="border border-black" placeholder="Input Title..." />
            </div>
            <div className="flex justify-between gap-20 my-2">
              <label>Post Text: </label>
              <ErrorMessage name="postText" component="span" className="text-red-500"/>
              <Field name="postText" className="border border-black" placeholder="Input Post Text..." />
            </div>
            <div className="flex justify-between gap-20 my-2">
              <label>Username: </label>
              <ErrorMessage name="username" component="span" className="text-red-500"/>
              <Field name="username" className="border border-black" placeholder="Input Username..." />
            </div>
            <div className="flex justify-center items-center">
                <button type="submit" className="border border-black rounded-md bg-blue-400">Create Post</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default createPost;
