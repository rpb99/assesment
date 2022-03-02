import React, { ChangeEvent, useState } from 'react'
import { useMutation } from "react-query";
import { addShip } from '../../services/shipsApi';
import { useNavigate } from 'react-router-dom'


const Create = () => {
    const navigate = useNavigate()
    const [shipName, setShipName] = useState("")
    const [error, setError] = useState("")
    const { isLoading, mutate: postShip } = useMutation(
        async () => {
            return await addShip(shipName)
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
    return (
        <div className="">
            <div className="">Tambah Shipping Comps</div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2 w-44 mt-12">
                    <label htmlFor="" className='text-gray-400 text-sm'>Nama</label>
                    <input className='border rounded' type="text" onChange={handleChange} />
                    <div className="text-red-600 text-sm">{error}</div>
                </div>
                <button className='text-white bg-blue-400 rounded mt-6 text-sm px-2 py-1'>Simpan</button>
            </form>
        </div>
    )
}

export default Create