import { Link } from 'react'
import { useState } from 'react'
import OAuth from '../components/OAuth'


export default function signUp() {

    const [input, setInput] = useState('')

    const handleChange = (e)=> {
        setInput({
            ...input,
            [e.target.id] : e.target.value
        })
    }

    const handleSubmit = async(e)=> {
        e.preventDefault()
        try {
            const res = await fetch('/api/auth/signup',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(input)
            })
    
            const data = res.json() 

        } catch (error) {
            
        }
        

    }



    return(
        <div>
                <p>SIGN UP HERE</p>

            <form onSubmit={handleSubmit}>

                <input onChange={handleChange} type="text" id='username' />
                <input onChange={handleChange} type="email" id='email' />
                <input onChange={handleChange} type="password" id="password" />
                <button>Sign Me Up</button>
                <Oauth />               
            </form>

            <div>
                <p>Already have an account?</p>
                <Link to='sign-in'>
                    Sign In
                </Link>
            </div>

            {error && <p>{error}</p>}
        </div>
        
    )
}