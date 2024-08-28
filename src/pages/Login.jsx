import { useEffect, useState } from 'react'
import Form from '../components/Form'
import Carousel from '../components/Carousel'
import Welcome from '../components/Welcome'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        console.log(formData)
        if (formData.email && formData.password) {
            toast.success('Welcome Back.');
            localStorage.setItem('token', 'true')
            setTimeout(() => {
                navigate('/home')
            }, 2000)
        }
    }, [formData])
    return (
        <>
            <div className='login-page row'>
                <div className='col-6'>
                    <Carousel />
                </div>
                <div className='col-6'>
                    <Form type="login" setData={setFormData} />
                    {formData.email && <Toaster toastOptions={{
                        style: {
                            fontWeight: '500',
                            width: '20rem',
                            height: '4rem'
                        }
                    }} />}
                </div>
            </div>

        </>
    )
}

export default Login
