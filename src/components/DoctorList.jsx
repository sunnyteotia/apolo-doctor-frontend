'use client'

import DoctorCard from '../components/ui/DoctorCard'

export default function DoctorList({ doctors }) {
  if (!doctors || doctors.length === 0) {
    return <p className="text-center text-gray-500 text-lg">No doctors found.</p>
  }

  return (
    <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor._id} doctor={doctor} />
      ))}
    </div>
  )
}
