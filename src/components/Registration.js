import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { register } from "./redux/actions";
import {useDispatch} from "react-redux";

const Registration = () => {
    const [firstname, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState('');

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const handleRegistration = (firstname, surname, username, email, password, bio) => 
    {dispatch(register(firstname, surname, username, email, password, bio))}
    // const [isPending, setIsPending] = useState(false);
    // const history = useHistory();
  

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
    const handleSubmit = (e) => {
        e.preventDefault();
       
        handleRegistration(firstname, surname, username, email, password, bio);
        // console.log(article)
        navigate('/profile')
    }
    return (
        <div className="create">
            <h2>Welcome to OSG's blog. Please Login</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input
                    type="text"
                    value={firstname}
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                    
                />
                {/* {errors.title && <p style={{ color: 'red' }}>Please check your First Name</p>} */}
                <label>Surname:</label>
                <input
                    type="text"
                    value={surname}
                    required
                    onChange={(e) => setSurname(e.target.value)}
                />
                {/* {errors.body && <p style={{ color: 'red' }}>Please check your Surname</p>} */}
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />
                {/* {errors.body && <p style={{ color: 'red' }}>Please check your last name</p>} */}
                <label>Email:</label>
                <input
                    type="text"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                {/* {errors.body && <p style={{ color: 'red' }}>Please check your last name</p>} */}
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                {/* {errors.body && <p style={{ color: 'red' }}>Please check your last name</p>} */}
                <label>Bio:</label>
                <textarea
                    type="text"
                    rows="7"
                    cols="40"
                    value={bio}
                    required
                    onChange={(e) => setBio(e.target.value)}
                />
                {/* {errors.body && <p style={{ color: 'red' }}>Please check your bio</p>} */}

                {/* {!isPending && <button >Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>} */}
                <button>Register</button>
                <p>Already have an account?
                    <Link to="/">
                        Click here to Login
                    </Link>
                </p>

            </form>
        </div>
    );
}

export default Registration;