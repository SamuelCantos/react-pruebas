import React, {useEffect, useState} from 'react';

const ConsumiendoApi = () => {

    const url = "https://jsonplaceholder.typicode.com/users"

    const [data, setData] = useState([])


    const obtenerDatos = async () =>{
        const response = await fetch(url)
        const users = await response.json()
        console.log(users)
        setData(users)
    }


    useEffect(() =>{
        console.log("useEffect");
        obtenerDatos()
    }, [])

    

    return(
        <div>
            <h1>Consumiendo Api</h1>
            <ul>
                {
                    data?.map(el => 
                        <li key={el.id}>
                            {el.name}
                        </li>
                        )
                }
            </ul>
        </div>
    )
}

export default ConsumiendoApi;