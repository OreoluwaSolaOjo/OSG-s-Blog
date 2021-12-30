import { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

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
        setIsPending(true);
        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(() => {
                console.log('New BLOG added')
                setIsPending(false);
                navigate('/homepage')
            })
    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Blog Title:</label>
                <input
                    type="text"

                    {...register("title", { required: true, maxLength: 10 })}
                />
                {errors.title && <p style={{ color: 'red' }}>Please check the First Name</p>}
                <label>Blog Body:</label>
                <textarea

                    cols="30"
                    row="20"
                    {...register("body", { required: true })}
                ></textarea>
                {errors.body && <p style={{ color: 'red' }}>Please check the Body</p>}
                <label>Blog Author:</label>
                <select

                    {...register("author")}
                >
                    <option value="oreoluwa">oreoluwa</option>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button >Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
                {/* <button>Add Blog</button> */}

            </form>
        </div>
    );
}

export default Create;