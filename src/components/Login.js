import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
    // const [isPending, setIsPending] = useState(false);
    // const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState('')
    const isAuthenticated = localStorage.getItem("authenticated");


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const blog = { title, body, author };
    //     setIsPending(true);
    //     fetch('http://localhost:8000/blogs/', {
    //         method: 'POST',
    //         headers: { "Content-type": "application/json" },
    //         body: JSON.stringify(blog)
    //     })
    //         .then(() => {
    //             console.log('New BLOG added')
    //             setIsPending(false);
    //             history.push('/')
    //         })
    // }
    const onSubmit = (data) => {
        if (data.email === 'admin@example.com' || data.password === '1234') {
            localStorage.setItem('authenticated', "true")
            window.location.pathname = '/homepage'
        } else {

            setError('Sorry your email and password is wrong')
        }

    }
    return (

        <div className="create">
            <h2>Welcome to OSG's blog. Please Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email:</label>
                <input
                    type="email"
                    {...register("email", { required: true, maxLength: 20 })}
                />
                {errors.email && <p style={{ color: 'red' }}>Please enter a valid email</p>}
                <label>Password:</label>
                <input
                    type="password"
                    {...register("password", { required: true, maxLength: 10 })}
                />
                {errors.password && <p style={{ color: 'red' }}>Please enter a valid password </p>}
                {error && <p>{error}</p>}

                {/* {!isPending && <button >Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>} */}
                <button>Login</button>
                {/* {errors.email && <p style={{ color: 'red' }}> Please enter email</p>}
                {errors && <p style={{ color: 'red' }}> Please enter the correct password</p>} */}
                <p>Don't have an account yet?
                    <Link to="/register">
                        Click here to register
                    </Link>
                </p>

            </form>
        </div>
    );
}

export default Login;