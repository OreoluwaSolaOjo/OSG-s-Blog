import BlogList from "./BlogList";

import useFetch from "./useFetch";

// const Home = () => {
//     const handleClick = () => {
//         console.log('hello, ninjas')
//     }
//     const handleClickAgain = (name) => {
//         console.log(`hello ${name}`)
//     }
//     return (
//         <div className="home">
//             <h2>Homepage</h2>
//             <button onClick={handleClick}>Click Me</button>
//             click event taking in a parameter and an anonymous function
//             <button onClick={() => {
//                 handleClickAgain('Oreoluwa')
//             }}>Click Me Again</button>
//         </div>

//     );
// }

// export default Home;
const Home = () => {
    // to use a hook like use state to change a persons name on click set a variable for the name i.e name and a function to change
    // the name i.e setName as stated below
    // const [name, setName] = useState('mario');
    // const [age, setAge] = useState(25)
    // const handleClick = () => {
    //     setName('luigi');
    //     setAge(32);

    // }

    // const [name, setName] = useState('mario');
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }
    // The useEffect hook takes a function and as a dependency on which it runs on in the square brackets
    // It runs the frist time the dom renders and and subsequent times only dependent on the dependency
    // useEffect(() => {
    //     console.log('Use effect run')
    //     console.log(blogs)

    // }, [name]);
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {/* props is a way to pass data froma parent
            component to a child componnent, once you pass in a prop
            you have to recieve it in the child component */}
            {/* <h2> Homepage</h2> */}
            {/* <p>{name} is {age} years old</p> */}
            {/* <button onClick={handleClick}> Click Me</button> */}
            {/* <BlogList blogs={blogs} title="All Blogs!" />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs!" /> */}
            {error && <div> {error}</div>}
            {isPending && <div> Loading ...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs"></BlogList>}
            {/* <button onClick={() => setName('Oreoluwa')
            }> Click Me</button>
            <p>{name}</p> */}
        </div>
    );
}

export default Home;