import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'

const Registration = () => {
    
    const initialValues = {
        username: "",
        password: ""
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required(),
        password: Yup.string().min(4).max(20).required()
    })

    const onSubmit = () => {

    }

  return (
    <div className='flex justify-center'>
        <div className='mt-4'>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          <Form className="border-2 border-black p-4 mx-10 py-2">
            <div className="flex justify-between gap-20 my-2">
              <label>Username: </label>
              <ErrorMessage name="username" component="span" className="text-red-500"/>
              <Field name="username" className="border border-black" placeholder="Input Username..." />
            </div>
            <div className="flex justify-between gap-20 my-2">
              <label>Password: </label>
              <ErrorMessage name="password" component="span" className="text-red-500"/>
              <Field name="password" className="border border-black" placeholder="Input Password..." />
            </div>
            <div className="flex justify-center items-center">
                <button type="submit" className="rounded-lg p-2 bg-blue-500 text-white">Register</button>
            </div>
          </Form>
        </Formik>
        </div>
    </div>
  )
}

export default Registration