'use client'
import { useState } from 'react'
import { TextField, Button as MuiButton } from '@mui/material'
import { toast } from 'sonner'

export default function AddDoctorForm() {
  const [formData, setFormData] = useState({
    name: '',
    specialization: '',
    experience: '',
    fees: '',
    rating: '',
    photoUrl: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/doctor/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Failed to add doctor')
      toast.success('Doctor added successfully!')
    } catch (err) {
      toast.error('Something went wrong!')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-2">
      <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} />
      <TextField fullWidth label="Specialization" name="specialization" value={formData.specialization} onChange={handleChange} />
      <TextField fullWidth label="Experience (years)" type="number" name="experience" value={formData.experience} onChange={handleChange} />
      <TextField fullWidth label="Fees" type="number" name="fees" value={formData.fees} onChange={handleChange} />
      <TextField fullWidth label="Rating (1-5)" type="number" name="rating" value={formData.rating} onChange={handleChange} />
      <TextField fullWidth label="Photo URL" name="photoUrl" value={formData.photoUrl} onChange={handleChange} />
      <MuiButton type="submit" variant="contained" color="primary" fullWidth>Add Doctor</MuiButton>
    </form>
  )
}
