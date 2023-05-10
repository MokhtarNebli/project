import React from 'react'
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Profil() {
  const nav = useNavigate();
  const { isAuth } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isAuth ) nav("/login");
  }, [isAuth, nav]);
  return (
    <div>Profil</div>
  )
}

export default Profil