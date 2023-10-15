import { useEffect, useState } from 'react';
import './Section.css'
import axios from 'axios';
function Section() {
    const [user, setUser] = useState(null);
    const [value, setValue] = useState('')
    const [username, setUsername] = useState('')
    const findUser = () => {
        console.log("hello")
        setUsername(value)
    }
    const nameHandeler = (e) => {
        console.log(e.target.value)
        setValue(e.target.value)

    }


    useEffect(() => {
        axios.get(`https://api.github.com/users/${username}`).then((response) => {
            setUser(response.data);
        });
    }, [username]);
    return (
        <>
            <section>
                <input type="text" onChange={nameHandeler} />
                <button onClick={findUser}>Find</button>
                {user && (
                    <div>
                        <h1>{user.login}</h1>
                        <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
                        <p>Followers: {user.followers}</p>
                        <p>Repositories: {user.public_repos}</p>
                    </div>)}
            </section>
        </>
    );
}

export default Section;