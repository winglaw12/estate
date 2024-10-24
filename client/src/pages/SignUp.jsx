import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OAuth from '../components/Oauth'

export default function SignUp() {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.id] : e.target.value,
    })
  }

  const handleSubmit = async(e)=> {
    e.preventDefault()
    try {
      setLoading(true)
      const res = await fetch('/api/auth/signup', 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
        const data = await res.json()

        if(data.success === false) {
          setLoading(false)
          setError(data.message)
          return
        }
        setLoading(false)
        setError(null)
        navigate('/sign-in')
    } catch (error) {
        setLoading(false)
        setError(data.message)
    }    
  }
    
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center my-7'>Sign Up</h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='username' onChange={handleChange} id='username' className='border p-3' />
        <input type="email" placeholder='email' id='email' onChange={handleChange} className='border p-3' />
        <input type="password" placeholder='password' onChange={handleChange} id='password' className='border p-3' />
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading...' : 'Sign Up'}</button>
        <OAuth />
      </form>

      <div className='flex gap-2 mt-5'>
        <p>Already have an account?</p>
        <Link to={'/sign-in'}>
          <span className='text-blue-700'>Sign In</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
