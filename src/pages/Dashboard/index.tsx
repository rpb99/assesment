import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'

const Dashboard = () => {
    const { user } = useSelector((state: RootStateOrAny) => state)
    return (
        <div className="h-full overflow-hidden">
            <div className="">Dashboard</div>
            <div className="flex flex-col justify-center flex-1 h-full">
                <div className="text-xl bg-gray-200 mx-44 h-56 flex flex-col items-center justify-center">
                    <div className="text-gray-600">Selamat Datang</div>
                    <div className="text-gray-400">{user.name}</div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard