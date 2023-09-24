import React from 'react'
import  { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

const BackButton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
      <Link className='bg-sky-900 text-white px-4 py-1 rounded-lg w-fit' to={destination}>
        <BsArrowLeft />
      </Link>
    </div>
  )
}

export default BackButton