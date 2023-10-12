import React from 'react'
import { Person } from '../interface/Car';
import { Slick } from '../component/Slick'


export function Home () {
    const person: Person = {
        name: "sring",
        country: 'Germany',
      };

    return (
        <div >
                <Slick/>
              
        </div>
    )
}


