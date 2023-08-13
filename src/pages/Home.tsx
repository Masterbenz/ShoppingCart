import React from 'react'
import { Person } from '../interface/Car';


export function Home () {
    const person: Person = {
        name: "sring",
        country: 'Germany',
      };

    return (
        <div >
                <h1>{person.name}</h1>
                <h2>{person.country}</h2>
        </div>
    )
}


