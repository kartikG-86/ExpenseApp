import { useEffect, useState } from 'react'
import Form from '../components/Form'
import Carousel from '../components/Carousel'

const ForgotPassword = () => {
    const [formData, setFormData] = useState({})

    return (
        <>

            <div className='login-page row'>
                <div className='col-6'>
                    <Carousel />
                </div>
                <div className='col-6'>
                    <Form type="forgot-password" setData={setFormData} />
                </div>
            </div>

        </>
    )
}

export default ForgotPassword
