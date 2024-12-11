import {Navigate, useNavigate, useParams} from 'react-router-dom'
import React from 'react'

export default function Post() {
    const status = 200

    const params = useNavigate()

    const onClick = () => {
        console.log('hello')
        Navigate('/about')
    }

    if (status === 404) {
        return <Navigate to='/notfound' />
    }

  return (
    <div>
        <h1>Post: {params.id}</h1>
        <p>Name: {params.name}</p>
    </div>
  )
}
