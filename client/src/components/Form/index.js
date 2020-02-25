import React from 'react';

export function Form(props){
    return(
            <div style = {{textAlign: 'center', color: 'white'}} className="form-group">
                <input className="form-control" {...props}></input>           
            </div>
    )
}

export function Button(props){
    return(
    <button className = "btn btn-primary" type = "submit" {...props}>Search!</button>
    )   
}

