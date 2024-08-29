import React from 'react'
import { useState } from 'react';

/* React Hooks useState Hook */

const profile = [
    {
        id: 1,
        name: 'Riya',
        age: 17,
        gender: 'female'
    },
    {
        id: 2,
        name: 'Darvish',
        age: 20,
        gender: 'male'
    },
    {
        id: 3,
        name: 'Krinal',
        age: 17,
        gender: 'female'
    },
    {
        id: 4,
        name: 'Meet',
        age: 20,
        gender: 'male'
    },
    {
        id: 5,
        name: 'Devanshi',
        age: 26,
        gender: 'female'
    },
    {
        id: 6,
        name: 'Vruti',
        age: 22,
        gender: 'female'
    }
]

const FilteringData = () => {

    const [profileData, setProfileData] = useState('')

    console.log(profileData);

    const FilterData = profile.filter((item) => item.gender == profileData)

    // const FilterData = profile.filter((item) => item.name.length < 6)

    // const FilterData = profile.filter((item) => item.age > 18 && item.age < 30)

    //  const FilterData = profile.filter((item) => item.gender == 'male')


    const handleMale = () => {
        return setProfileData('male')
    }

    const handleFemale = () => {
        return setProfileData('female')
    }

    return (
        <div>
            <h1 className='heading'>React DataFiltering Useing Array</h1>
            <div className='flex justify-around'>
                <button onClick={handleMale}>Male</button>
                <button onClick={handleFemale}>Female</button>
                {
                    FilterData.map((item) => {
                        return (
                            <div key={item.id}>
                                <ul>
                                    <li>{item.name}</li>
                                    <li>{item.age}</li>
                                    <li>{item.gender}</li>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FilteringData