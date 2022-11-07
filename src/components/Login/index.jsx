import { useFormik } from "formik"
import * as yup from 'yup';




const Login = (props) => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        validationSchema:

            yup.object({

                email: yup
                    .string('Enter your email')
                    .required('Email is required')
                    .email("Enter a valid Email ")
                    .min(3, "please enter more then 3 characters ")
                    .max(25, "please enter within 20 characters "),

                password: yup
                    .string("Please enter your Password")
                    .required("Password is required")
                    .min(8, "Minimum 8 characters")
            }),

        onSubmit: (values) => {
            console.log("values : ", values);
            console.log("Hello");
            (() => {
                let newVar = !props.state
                props.setState(newVar);
                console.log("isSignup :", props.state);
            })();
        }
    });

    return (
        <div className="loginPage">

            <h1> Login </h1>

            <form onSubmit={formik.handleSubmit}>

                <div className="inputDiv">
                    <label htmlFor="email">Email : </label>
                    <input
                        type="email"
                        id="email"
                        value={formik.values.email}
                        placeholder="Enter your Email :"
                        onChange={formik.handleChange}
                    />
                    {(formik.touched.email && Boolean(formik.errors.email)) ?
                        <p className="inputError">{formik.errors.email}</p> : <p className="inputError"></p>}
                </div>

                <div className="inputDiv">
                    <label htmlFor="password">Password : </label>
                    <input
                        type="password"
                        id="password"
                        value={formik.values.password}
                        placeholder="Enter your password :"
                        onChange={formik.handleChange}
                    />
                    {(formik.touched.password && Boolean(formik.errors.password)) ?
                        <p className="inputError">{formik.errors.password}</p> : <p className="inputError"></p>}
                </div>


                <button type="submit">Login</button>
            </form>
        </div>
    )
}


export default Login;