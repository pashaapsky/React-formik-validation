import React, {FC} from 'react';
import {useFormik} from "formik";

interface OwnProps {
}

type Props = OwnProps;

interface MyFormValues {
    email: string;
    password: string
}

interface FormErrors {
    email?: string,
    password?: string
}

const Form: FC<Props> = (props) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: (values: MyFormValues): FormErrors => {
            const errors: FormErrors = {};

            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 4) {
                errors.password = 'Must be > 4';
            }

            return errors;
        },
        onSubmit: (values, {setSubmitting}) => {
            console.log(values);
            setSubmitting(false);
            formik.resetForm();
        }
    });

    return (
        <form className="form" onSubmit={formik.handleSubmit}>
            <div className={`form-control ${formik.touched.email ? (formik.errors.email ? "error" : "success") : ""}`}>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && !formik.errors.email ? <i className="fas fa-check-circle green"/> : null}
                {formik.touched.email && formik.errors.email ? <i className="fas fa-exclamation-circle red"/> : null}
                {formik.touched.email && formik.errors.email ? <div className="error-msg">{formik.errors.email}</div> : null}
            </div>

            <div className={`form-control ${formik.touched.password ? (formik.errors.password ? "error" : "success") : ""}`}>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && !formik.errors.password ? <i className="fas fa-check-circle green"/> : null}
                {formik.touched.password && formik.errors.password ? <i className="fas fa-exclamation-circle red"/> : null}
                {formik.touched.password && formik.errors.password ? <div className="error-msg">{formik.errors.password}</div> : null}
            </div>

            <button className="" type="submit">Submit</button>
        </form>
    );
};

export default Form;