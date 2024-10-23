import React from 'react'
import { Navigate } from "react-router-dom";
import { userAuth } from '../context'

function ProtectedRoutes({ children }) {
  const { user } = userAuth();
  if (!user) {
    return <Navigate to="/auth"/>
  }

  return children
}

export default ProtectedRoutes