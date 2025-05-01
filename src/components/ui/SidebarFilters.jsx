'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'

export default function SidebarFilters({ onFilterChange }) {
  const [filters, setFilters] = useState({
    experienceMin: 0,
    ratingMin: 0,
    feesMax: 1000,
  })

  const handleChange = (key, value) => {
    const updatedFilters = { ...filters, [key]: value }
    setFilters(updatedFilters)
    if (onFilterChange) onFilterChange(updatedFilters)
  }

  return (
    <aside className="w-72 bg-white p-4 shadow rounded-lg space-y-6 sticky top-20 h-fit">
      <h2 className="text-lg font-semibold mb-2">Filters</h2>

      <div>
        <Label htmlFor="experience">Minimum Experience (years)</Label>
        <Slider
          defaultValue={[filters.experienceMin]}
          min={0}
          max={30}
          step={1}
          onValueChange={(val) => handleChange('experienceMin', val[0])}
        />
        <p className="text-sm mt-1">{filters.experienceMin} years</p>
      </div>

      <div>
        <Label htmlFor="rating">Minimum Rating</Label>
        <Slider
          defaultValue={[filters.ratingMin]}
          min={0}
          max={5}
          step={0.5}
          onValueChange={(val) => handleChange('ratingMin', val[0])}
        />
        <p className="text-sm mt-1">{filters.ratingMin} stars</p>
      </div>

      <div>
        <Label htmlFor="fees">Maximum Fees (₹)</Label>
        <Slider
          defaultValue={[filters.feesMax]}
          min={0}
          max={5000}
          step={100}
          onValueChange={(val) => handleChange('feesMax', val[0])}
        />
        <p className="text-sm mt-1">₹{filters.feesMax}</p>
      </div>

      <Button
        variant="outline"
        onClick={() => {
          const defaultFilters = { experienceMin: 0, ratingMin: 0, feesMax: 1000 }
          setFilters(defaultFilters)
          onFilterChange && onFilterChange(defaultFilters)
        }}
      >
        Reset Filters
      </Button>
    </aside>
  )
}
