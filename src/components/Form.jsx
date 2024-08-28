import React, { useState } from "react";

const Form = ({ type, setData }) => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const submitForm = (e) => {
        e.preventDefault()
        console.log(form)
        setData(form)
        setForm({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        })

    }
    return <>
        <div className="form d-flex align-items-center">
            <form onSubmit={submitForm} className="d-flex justify-content-center" >
                <div>
                    <h4 className="text-center">{type == 'login' ? 'EXPENDI' : type == 'sign-up' ? 'Create Account' : 'Forgot Password'}</h4>
                    <p className="text-center mb-5">{type == 'login' ? 'Simplify your expenses' : type == 'sign-up' ? 'Fill your information below to register with expendi' : 'Reset your password easily by entering a new one'}</p>
                    {type == 'login' && <h6 className="text-center mb-5">Sign in</h6>}
                    {type == 'sign-up' && <div className="form-floating mb-3" >
                        <input type="text" className="form-control" id="floatingUsername" placeholder="Username"
                            value={form.name}
                            onChange={(e) => setForm((prevData) => {
                                return { ...prevData, name: e.target.value }
                            })} />

                        <label for="floatingUsername">Username</label>
                    </div>}
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingEmail" placeholder="Email"
                            value={form.email}
                            onChange={(e) => setForm((prevData) => {
                                return { ...prevData, email: e.target.value }
                            })}
                        />
                        <label for="floatingEmail">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                            value={form.password}
                            onChange={(e) => setForm((prevData) => {
                                return { ...prevData, password: e.target.value }
                            })}
                        />
                        <label for="floatingPassword">Password</label>
                    </div>
                    {type == 'forgot-password' && <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingConfirmPassword" placeholder="Confirm Password"
                            value={form.confirmPassword}
                            onChange={(e) => setForm((prevData) => {
                                return { ...prevData, confirmPassword: e.target.value }
                            })}
                        />
                        <label for="floatingPassword">Confirm Password</label>
                    </div>}

                    {type == 'login' && <div className="text-end">
                        <a href="/forgot-password">Forgot Password?</a>
                    </div>}

                    <div>
                        <button type="submit" className="btn my-5">{type == 'login' ? 'Sign in' : type == 'sign-up' ? 'Create Account' : 'Reset Password'}</button>
                    </div>

                    {type == 'login' && <div className="text-center">Don't have an account? <a href="/sign-up">Sign Up</a></div>}
                    {type == 'sign-up' && <div className="text-center">Already have an account? <a href="/login">Sign in</a></div>}
                </div>
            </form>
        </div>
    </>
}

export default Form;