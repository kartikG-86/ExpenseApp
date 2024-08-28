import { useEffect, useState } from 'react'
import Form from '../components/Form'
import Carousel from '../components/Carousel'
import Welcome from '../components/Welcome'
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {
    const [formData, setFormData] = useState({})

    useEffect(() => {
        if (formData.email && formData.password) {
            toast.success(`Hello ${formData.name}, Welcome to Expendi`);
        }
    }, [formData])
    return (
        <>

            <div className='login-page row'>
                <div className='col-6'>
                    <Carousel />
                </div>
                <div className='col-6'>
                    <Form type="sign-up" setData={setFormData} />
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

export default Signup
