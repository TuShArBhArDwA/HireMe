import React, { useState } from 'react'

const AddJob = () => {

  const [title,setTitle]=useState('');
  const [location,setLocation]=useState('Bangalore')
  const [category,setCategory]=useState('Programming')
  const [level,setLevel]=useState('Beginner Level')
  const [salary,setSalary]=useState(0)

  return (
    <form action="">
      <div>
        <p>Job Title</p>
        <input type="text" placeholder='Type here'
        onChange={e=>setTitle(e.target.value)}
        value={title} required
        />
      </div>
    </form>
  )
}

export default AddJob
