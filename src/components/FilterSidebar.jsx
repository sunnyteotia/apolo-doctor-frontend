// /app/doctors/page.jsx
'use client'

import { Suspense } from 'react'
import DoctorList from '@/components/DoctorList'
import FilterSidebar from '@/components/FilterSidebar'
import Pagination from '@/components/Pagination'
import { getDoctorsWithFilter } from '@/lib/api'

export default async function DoctorPage({ searchParams }) {
  const page = parseInt(searchParams.page) || 1
  const limit = 5

  const experienceMin = parseInt(searchParams.experienceMin) || 0
  const feesMax = parseInt(searchParams.feesMax) || 10000
  const ratingMin = parseInt(searchParams.ratingMin) || 0

  const filters = {
    experienceMin,
    feesMax,
    ratingMin,
  }

  const queryParams = new URLSearchParams({
    page,
    limit,
    ...filters,
  }).toString()

  const res = await getDoctorsWithFilter(queryParams)
  const doctors = res.data
  const totalPages = res.totalPages

  return (
    <main className="grid grid-cols-1 lg:grid-cols-5 gap-6 px-4 py-6">
      <div className="lg:col-span-1">
        <Suspense fallback={<div>Loading filters...</div>}>
          <FilterSidebar currentFilters={filters} />
        </Suspense>
      </div>

      <div className="lg:col-span-4 space-y-6">
        <Suspense fallback={<div>Loading doctors...</div>}>
          <DoctorList doctors={doctors} />
        </Suspense>

        <Pagination currentPage={page} totalPages={totalPages} />
      </div>
    </main>
  )
}
