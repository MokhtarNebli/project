import React from 'react'
import { useSelector } from "react-redux";

const Profil = () => {
const { userInfo } = useSelector((state) => state.user);

  return (
    <div> 
      Welcom {userInfo.name}
      </div>
  )
}

export default Profil