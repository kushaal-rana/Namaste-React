import React from 'react'
import { useRouteError } from 'react-router-dom'

export const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
        <h1>Opps Something went wrong</h1>
        <h1>{err.statusText || err.message}</h1>
        <h1>{err.status}</h1>
        
    </div>
  )
}
