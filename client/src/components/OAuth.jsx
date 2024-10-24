import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice'
import { useNavigate } from 'react-router-dom'

export default function OAuth() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleGoogleClick = async()=> {
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)

            const result = await signInWithPopup(auth, provider)

            // send result to back end
            const res = await fetch('/api/auth/google', {
               method: 'POST',
               headers: {
                'Content-Type': 'application/json',
               },
               body: JSON.stringify({ 
                name: result.user.displayName, 
                email: result.user.email, 
                photo: result.user.photoURL})
            })
            const data = await res.json()
            dispatch(signInSuccess(data))
            navigate('/')
        } catch (error) {
            console.log('Could not sign in with Google', error);           
        }
    }

  return (
    // since 'OAuth' component is called inside a form, use type 'button' so that it will not submit the form
    <button 
        onClick={handleGoogleClick} 
        type='button' 
        className='bg-red-700 text-white p-3 rounded-lg'>
            Continue with Google
    </button>
  )
}
