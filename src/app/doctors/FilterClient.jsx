'use client'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function FilterClient({ currentFilters }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [experienceMin, setExperienceMin] = useState(currentFilters.experienceMin)
  const [feesMax, setFeesMax] = useState(currentFilters.feesMax)
  const [ratingMin, setRatingMin] = useState(currentFilters.ratingMin)

  const handleFilterApply = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('experienceMin', experienceMin)
    params.set('feesMax', feesMax)
    params.set('ratingMin', ratingMin)
    params.set('page', '1') // Reset to first page after filter

    router.push(`/doctors?${params.toString()}`)
  }

  return (
    <div className="space-y-4 p-4 border rounded-lg shadow-sm bg-white">
      <div>
        <label>Experience Min:</label>
        <input
          type="number"
          value={experienceMin}
          onChange={(e) => setExperienceMin(e.target.value)}
          className="w-full border px-2 py-1 rounded"
        />
      </div>

      <div>
        <label>Fees Max:</label>
        <input
          type="number"
          value={feesMax}
          onChange={(e) => setFeesMax(e.target.value)}
          className="w-full border px-2 py-1 rounded"
        />
      </div>

      <div>
        <label>Rating Min:</label>
        <input
          type="number"
          value={ratingMin}
          onChange={(e) => setRatingMin(e.target.value)}
          className="w-full border px-2 py-1 rounded"
        />
      </div>

      <button
        onClick={handleFilterApply}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Apply Filters
      </button>
    </div>
  )
}
