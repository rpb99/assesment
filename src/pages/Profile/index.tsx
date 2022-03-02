import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'


const Profile = () => {
    const { user } = useSelector((state: RootStateOrAny) => state)
    return (
        <div className='mt-24'>
            <div className="text-2xl text-center font-bold my-6">Profile</div>
            <div className="font-bold w-96 mx-auto bg-gray-100 p-12 rounded-xl text-sm">
                <div className="flex flex-col gap-4">
                    <div className="">
                        <div className="text-gray-400">Nama</div>
                        <div className="">{user.name}</div>
                    </div>
                    <div className="">
                        <div className="text-gray-400">Alamat</div>
                        <div className="">-</div>
                    </div>
                    <div className="">
                        <div className="text-gray-400">No. HP</div>
                        <div className="">{user.phone_number}</div>
                    </div>
                    <div className="">
                        <div className="text-gray-400">Email</div>
                        <div className="">{user.email}</div>
                    </div>
                    <div className="">
                        <div className="text-gray-400">Nama</div>
                        <div className="">{user.name}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile