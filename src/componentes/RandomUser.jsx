import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import RandomHijo from './RandomHijo';


const RandomUser = (props) => {

    const url = "https://api.randomuser.me/"

    const [user, setUser] = useState([])

     //---------------------------------------------------PETICIONES A API EXTERNA CON FETCH ---------------------------------------------------------------------

   /*  useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                const userData = {
                    name: data.results[0].name.first,
                    email: data.results[0].email,
                    picture: data.results[0].picture.thumbnail,
                };
                setUser(userData)
            })
        }, []) */


             //---------------------------------------------------PETICIONES A API EXTERNA CON AXIOS ---------------------------------------------------------------------

        
        useEffect(() =>{
            Axios.get(url)
            .then(response => {
                const userData = {
                    name: response.data.results[0].name.first,
                    email: response.data.results[0].email,
                    picture: response.data.results[0].picture.thumbnail,
                };
                console.log(response);

            setUser(userData)
        })
    }, [])


    return (
        <div>
            <h1>RandomUser</h1>
            <h3>{user.name}</h3>
            <img src={user.picture} width="100"/>
            <hr></hr>
            <div>
                <RandomHijo user={user}/>
            </div>
        </div>
    )
}



export default RandomUser;