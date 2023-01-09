// import React from 'react'
// import { useFormik } from 'formik';
// import { basicSchema } from './basicSchema';

// const onSubmit=async(values,actions)=>{
//     console.log(values);
//     console.log(actions);
//     console.log("submitted");
//     await new Promise((resolve)=>setTimeout(resolve,1000));
//     actions.resetForm()
// };

//  const Login = () => {
//     const {values,errors,touched,handleBlur,isSubmitting,handleChange,handleSubmit}=useFormik({
//         initialValues:{
//             email:"",
//             age:"",
//             password:"",
//             confirmPassword:'',
//         },
//         validationSchema:basicSchema,
//         onSubmit,
//     });
//    console.log(errors);
//    console.log(values);

//     //console.log(formik);

//   return (
//     <form onSubmit={handleSubmit} autoComplete='off'>
//         <lable htmlFor="email">Email</lable>
//         <input id="email"
//          type="email" 
//          placeholder="email"
//          value={values.email}
//          onChange={handleChange}
//          onBlur={handleBlur}
//          className={errors.email && touched.email ? "input-error" : ''}
//          />
//          {errors.email && touched.email && <p className='error'>{errors.email}</p>}
//          <lable htmlFor="age">Age</lable>
//          <input id="age"
//          type="number"
//          value={values.age}
//          onBlur={handleBlur}
//          onChange={handleChange}
//          placeholder="enter age"
//          className={errors.age && touched.age ? "input-error" : ''}
//          />
//          {errors.age && touched.age && <p className='error'>{errors.age}</p>}
//         <lable htmlFor="password">password</lable>
//          <input id="password"
//          type="password"
//          value={values.password}
//          onBlur={handleBlur}
//          onChange={handleChange}
//          placeholder="enter password"
//          className={errors.password && touched.password ? "input-error" : ''}
//          />
//         {errors.password && touched.password && <p className="error">{errors.password} </p>}
//         <lable htmlFor="confirmPassword">Confirm password</lable>
//          <input id="confirmPassword"
//          type="password"
//          value={values.confirmPassword}
//          onBlur={handleBlur}
//          onChange={handleChange}
//          placeholder="confirm password"
//          className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ''}
//          />
//          {errors.confirmPassword && touched.confirmPassword &&<p classsName="error">{errors.confirmPassword}</p>}
//           <button type="submit" disabled={isSubmitting}>Submit</button>
//     </form>
//   )
// }

// export default Login;