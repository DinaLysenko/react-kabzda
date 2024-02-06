import React, {useMemo, useState} from "react";


export default {
    title: 'selectUseMemo'
}
type CitiesStateType=CitiesType[]

type CitiesType={
    countryId: string
    city: string
    population: number
}
const citiesState = [
    {
        countryId: '1',
        city: 'Moscow',
        population: 10000000

    },
    {
        countryId: '1',
        city: 'Ufa',
        population: 4000000

    },
    {
        countryId: '1',
        city: 'Magnitogorsk',
        population: 300000

    },
    {
        countryId: '2',
        city: 'Minsk',
        population: 8000000

    },
    {
        countryId: '2',
        city: 'Mogilev',
        population: 500000

    },
    {
        countryId: '2',
        city: 'Brest',
        population: 300000

    },
    {
        countryId: '3',
        city: 'New-York',
        population: 20000000

    },
    {
        countryId: '3',
        city: 'Washington',
        population: 10000000

    },
    {
        countryId: '3',
        city: 'Orlean',
        population: 10000000

    },
]

const CitiesSelect=(props: { cities: CitiesStateType })=>{
    console.log('city')
    return  <select>
        {props.cities.map(c=>{
            return (
                <option value={c.countryId}>{c.city}</option>
            )
        })}
    </select>
}

 const Cities=React.memo(CitiesSelect)
 // const Count=React.memo(Counter)

export const HelpersExample = () => {
    console.log('exp')
    const [cities, setCities] = useState<CitiesStateType>
    (citiesState)
    const[count, setCount]=useState(0)
    const filteredCities=useMemo(()=>{
        return cities.filter(f=>f.city.toLowerCase().indexOf('m')> -1)
    }, [cities])

    const setFilter=()=>{
        setCities(filteredCities)
    }
    return <div>
        <div>
            {count}
        </div>
        <div>
            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
        <Cities cities={cities}/><button onClick={setFilter}>Filtered cities</button>
    </div>
}