import React, { ChangeEvent, useEffect, useState } from 'react'
import { useMutation } from "react-query";
import { addShip, deleteShip, updateShip } from '../../services/shipsApi';
import { useNavigate } from 'react-router-dom'
import { useSelector, RootStateOrAny } from 'react-redux'


const Edit = () => {
    const { ship } = useSelector((state: RootStateOrAny) => state)
    const navigate = useNavigate()
    const [shipName, setShipName] = useState(ship.name)
    const [error, setError] = useState("")
    const { isLoading, mutate: postShip } = useMutation(
        async () => {
            return await updateShip(ship.id, shipName)
        },
        {
            onSuccess: (res) => {
                navigate('/ships')

            },
            onError: (err: any) => {
                // Handle Error
            },
        }
    );
    const { isLoading: isLoadingDelete, mutate: removeShip } = useMutation(
        async () => {
            return await deleteShip(ship.id)
        },
        {
            onSuccess: (res) => {
                navigate('/ships')

            },
            onError: (err: any) => {
                // Handle Error
            },
        }
    );

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (!shipName) return setError('Nama harus diisi')
        postShip()
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setError('')
        const { value } = e.target
        setShipName(value)
        if (!value) return setError('Nama harus diisi')
    }

    useEffect(() => {
        if (!ship.id) navigate('/ships')
    }, [])

    const handleRemove = () => {
        let text = "Are you sure want to delete?"
        if (window.confirm(text) == true) {
            removeShip()
        }
    }

    return (
        <div className="">
            <div className="flex gap-4">
                <div className="">Edit Shipping Comps</div>
                <div onClick={handleRemove} className="bg-red-600 text-white px-2 rounded cursor-pointer">-</div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2 w-44 mt-12">
                    <label htmlFor="" className='text-gray-400 text-sm'>Nama</label>
                    <input value={shipName} className='border rounded' type="text" onChange={handleChange} />
                    <div className="text-red-600 text-sm">{error}</div>
                </div>
                <button className='text-white bg-blue-400 rounded mt-6 text-sm px-2 py-1'>Simpan</button>
            </form>
        </div>
    )
}

export default Edit