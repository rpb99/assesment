import React, { useEffect, useState } from 'react'
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux'
import { useQuery } from "react-query";
import { getShipping } from '../../services/shipsApi';
import { Link } from 'react-router-dom'
import { addShip } from '../../redux/ship';

interface IShip {
    id: number
    name: string
}

const Ship = () => {
    const dispatch = useDispatch()
    const [ships, setShips] = useState([]) as any
    const [term, setTerm] = useState("")



    const { isLoading: isLoadingShips, refetch: getShips } = useQuery(
        ["query-ships", term],
        async () => {
            return await getShipping(term)
        },
        {
            enabled: Boolean(term),
            onSuccess: (res) => {
                setShips(res.data.data);
            },
            onError: (err) => {
                // setGetResult(fortmatResponse(err.response?.data || err));
            },
        }
    );

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        let timeout
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            setTerm(e.target.value)
        }, 500);
    }

    useEffect(() => {
        getShips()
    }, [isLoadingShips, term])



    return (
        <div className="h-full overflow-hidden">
            <div className="flex justify-between">
                <div className="flex gap-4">
                <div>Shipping Comps</div>
                <Link to="/ships/new" className="bg-green-600 text-white px-4 rounded" >+</Link>
                </div>
                <input className='border rounded px-2' type="text" placeholder='Cari' onChange={handleSearch} />
            </div>
            <table className='w-full text-left mt-6'>
                <thead className='bg-gray-200'>
                    <tr>
                        <th className='px-4'>Nama</th>
                    </tr>
                </thead>
                <tbody>
                    {ships.map((ship: IShip) => (
                        <tr key={ship.id}>
                            <td onClick={() => dispatch(addShip({ name: ship.name, id: ship.id }))} className='px-4 border-b py-1'><Link to='/ships/edit'>{ship.name}</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="">{isLoadingShips && "Loading..."}</div>
        </div>
    )
}

export default Ship