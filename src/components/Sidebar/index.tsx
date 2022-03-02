import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from "react-query";
import { useSelector, RootStateOrAny,useDispatch } from 'react-redux'
import { logoutUser } from '../../services/userApi';
import { clearShip } from '../../redux/ship';
import { clearUser } from '../../redux/user';

const Sidebar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state: RootStateOrAny) => state)
  useEffect(() => {
    if (Object.keys(user).length < 1) navigate("/");
  }, [])

  const { isLoading, mutate: logOut } = useMutation(
    async () => {
        return await logoutUser()
    },
    {
        onSuccess: (res) => {
          dispatch(clearShip())
          dispatch(clearUser())
          localStorage.removeItem('@acc_item')
            navigate('/')

        },
        onError: (err: any) => {
            // Handle Error
        },
    }
);


  const handleLogout = () => {
    logOut()
  }
  return (
    <div className='min-h-screen bg-gray-300 w-56 flex flex-col justify-between'>
      <div className="flex flex-col text-gray-600 text-sm">
        <div className="border-b">
          <div className="px-6 py-2">
            <Link to="/admin" >Dashboard</Link>
          </div>
        </div>
        <div className="border-b">
          <div className="px-6 py-2">
            <Link to="/ships" >Shipping Comps</Link>
          </div>
        </div>
      </div>
      <div className="bg-blue-400 text-white text-center cursor-pointer" onClick={handleLogout}>Log out</div>
    </div>
  )
}

export default Sidebar