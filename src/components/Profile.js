import react from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import registration from "./Registration";
import { edit_profile } from "./redux/actions";


const Profile = () => {
    const handleEditProfile = (firstname, surname, username, email, password, bio) => 
    {dispatch(edit_profile(firstname, surname, username, email, password, bio))}
    const { details } =  useSelector(state => state.registration)
    console.log(details)
    const [firstname, setFirstname] = useState(details.firstname);
    const [surname, setSurname] = useState(details.surname);
    const [username, setUsername] = useState(details.username);
    const [email, setEmail] = useState(details.email);
    const [password, setPassword] = useState(details.password);
    const [bio, setBio] = useState(details.bio);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(details)
//    const handleEditProfile = (firstname, surname, username, email, password, bio) => 
//     {dispatch(edit_profile(firstname, surname, username, email, password, bio))}
    const handleSubmit = (e) => {
        e.preventDefault();
        handleEditProfile(firstname, surname, username, email, password, bio);
        console.log(handleEditProfile)
        navigate('/profile')
    }
   
    return (

        <div className="create">
            <h2>Profile Details</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input
                    type="text"
                    value={firstname}
                    required
                    onChange = {(e) => setFirstname(e.target.value)}
                   
                />
                {/* {errors.title && <p style={{ color: 'red' }}>Please check your First Name</p>} */}
                <label>Surname:</label>
                <input
                    type="text"
                    value={surname}
                    required
                    onChange = {(e) => setSurname(e.target.value)}
                    
                />
                {/* {errors.body && <p style={{ color: 'red' }}>Please check your Surname</p>} */}
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    required
                    onChange = {(e) => setUsername(e.target.value)}
                />
                {/* {errors.body && <p style={{ color: 'red' }}>Please check your last name</p>} */}
                <label>Email:</label>
                <input
                    type="text"
                    value={email}
                    required
                    onChange = {(e) => setEmail(e.target.value)}
                />
                {/* {errors.body && <p style={{ color: 'red' }}>Please check your last name</p>} */}
                <label>Password:</label>
                <input
                    type="text"
                    value={password}
                    required
                    onChange = {(e) => setPassword(e.target.value)}
                />
                {/* {errors.body && <p style={{ color: 'red' }}>Please check your last name</p>} */}
                <label>Bio:</label>
                <textarea
                    type="text"
                    rows="7"
                    cols="40"
                    value={bio}
                    required
                    onChange = {(e) => setBio(e.target.value)}
                />
                {/* {errors.body && <p style={{ color: 'red' }}>Please check your bio</p>} */}

                {/* {!isPending && <button >Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>} */}
                <button>Update Profile</button>


            </form>

        </div>
    );
}

export default Profile;