import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, RootStateOrAny } from 'react-redux'
import user from '../../redux/user';

const Header = () => {

    const { user } = useSelector((state: RootStateOrAny) => state)
    if (Object.keys(user).length > 0) {
        return <PrivateHeader user={user} />
    }
    return <PublicHeader />
}

const PublicHeader = () => {
    return (
        <div className="flex justify-between bg-blue-400 px-4 text-white py-2">
            <div className="font-bold">KLEDO</div>
            <div className="flex gap-4">
                <Link to="/profile" className="">Profile</Link>
                <Link to="/" className="">Login</Link>
            </div>
        </div>
    )
}

const PrivateHeader = ({ user }: any) => {

    return (
        <div className="flex justify-between bg-blue-400 px-4 text-white py-2">
            <div className="font-bold">KLEDO TEST ADMIN</div>
            <div className="flex gap-4">
                <Link to="/profile" className="">{user.name}</Link>
            </div>
        </div>
    )
}

export default Header