import React from 'react';

const RandomHijo = (props) =>{
    return (
        <div>
            <h1>Probando pasar por props de padre a hijo el user</h1>
            <h4>{props.user.name}</h4>
            <h4>{props.user.email}</h4>
            <img src={props.user.picture} width="100"/>
        </div>
    )
}

export default RandomHijo;