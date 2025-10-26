import React, { useState } from 'react'
import axios from 'axios'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin(e) {
    e.preventDefault()

    axios.post('http://localhost:8081/login', { email, password })
      .then(res => {
        if (res.data.success) {
          alert(res.data.message)
          console.log('User:', res.data.user)
        } else {
          alert('Login failed!')
        }
      })
      .catch(err => {
        console.error('Login error:', err)
        alert('Invalid email or password!')
      })
  }

  return (
    <div className="flex justify-center mt-10">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <form onSubmit={handleLogin}>
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn btn-neutral mt-4 w-full">
            Login
          </button>
        </form>
      </fieldset>
    </div>
  )
}
