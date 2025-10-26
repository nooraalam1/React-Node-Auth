import React, { useState } from 'react'
import axios from 'axios'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    axios.post('http://localhost:8081/register', { name, email, password }) 
      .then(res => {
        console.log('Registration successful:', res.data)
        alert('Registration successful!')
      })
      .catch(err => {
        console.error('Error registering user:', err)
        alert('Something went wrong!')
      })
  }

  return (
    <div className="flex justify-center mt-10">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Register</legend>

        <form onSubmit={handleSubmit}>
          <label className="label">Full Name</label>
          <input
            type="text"
            className="input"
            placeholder="Full Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn btn-neutral mt-4 w-full">Register</button>
        </form>
      </fieldset>
    </div>
  )
}
