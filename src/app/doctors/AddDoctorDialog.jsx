'use client'
import { useState } from 'react'

export default function AddDoctorDialog() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    consultationFee: '',
    imageUrl: '',
    rating: '',
    location: '',
    gender: '',
    experience: '',
    specialization: '',
  })

  const handleChange = (e) => {
    const { name, value, type } = e.target
    setFormData({
      ...formData,
      [name]: type === 'number' ? Number(value) : value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = {
      name: formData.name,
      consultationFee: Number(formData.consultationFee),
      imageUrl: formData.imageUrl,
      rating: Number(formData.rating),
      location: formData.location,
      gender: formData.gender,
      experience: Number(formData.experience),
      specialization: formData.specialization,
    }

    try {
      const res = await fetch('http://localhost:3000/api/doctor/addDoctor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error('Failed to add doctor')

      alert('Doctor added successfully!')
      setOpen(false)
      window.location.reload()
    } catch (error) {
      console.error(error)
      alert('Error adding doctor.')
    }
  }

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Add Doctor
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
            <h2 className="text-xl font-semibold">Add New Doctor</h2>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border px-2 py-1 rounded"
              />
              <input
                name="consultationFee"
                type="number"
                placeholder="Consultation Fee"
                value={formData.consultationFee}
                onChange={handleChange}
                required
                className="w-full border px-2 py-1 rounded"
              />
              <input
                name="imageUrl"
                type="text"
                placeholder="Image URL"
                value={formData.imageUrl}
                onChange={handleChange}
                required
                className="w-full border px-2 py-1 rounded"
              />
              <input
                name="rating"
                type="number"
                placeholder="Rating (1-5)"
                min={1}
                max={5}
                value={formData.rating}
                onChange={handleChange}
                required
                className="w-full border px-2 py-1 rounded"
              />
              <input
                name="location"
                type="text"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full border px-2 py-1 rounded"
              />
              <input
                name="gender"
                type="text"
                placeholder="Gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full border px-2 py-1 rounded"
              />
              <input
                name="experience"
                type="number"
                placeholder="Experience (in years)"
                value={formData.experience}
                onChange={handleChange}
                required
                className="w-full border px-2 py-1 rounded"
              />
              <input
                name="specialization"
                type="text"
                placeholder="Specialization"
                value={formData.specialization}
                onChange={handleChange}
                required
                className="w-full border px-2 py-1 rounded"
              />

              <div className="flex justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
