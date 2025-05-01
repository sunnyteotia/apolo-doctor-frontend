import DoctorList from '../../components/DoctorList'
import Pagination from '../../components/Pagination'
import { getDoctorsWithFilter } from '@/lib/api'
import FilterClient from './FilterClient'
import AddDoctorDialog from './AddDoctorDialog'

export const metadata = {
  title: 'Find Doctors | Doctor Listing',
  description: 'Browse top-rated doctors by experience, fees, and rating.',
}

export default async function DoctorPage({ searchParams }) {
  const page = parseInt(searchParams.page) || 1
  const limit = 5
  const experienceMin = parseInt(searchParams.experienceMin) || 0
  const feesMax = parseInt(searchParams.feesMax) || 10000
  const ratingMin = parseInt(searchParams.ratingMin) || 0

  const queryParams = new URLSearchParams({
    page,
    limit,
    experienceMin,
    feesMax,
    ratingMin,
  }).toString()

  const res = await getDoctorsWithFilter(queryParams)
  const doctors = res.data
  const totalPages = res.totalPages

  return (
    <main className="grid grid-cols-1 lg:grid-cols-5 gap-6 px-4 py-6">
      {/* Filters */}
      <div className="lg:col-span-1">
        <FilterClient
          currentFilters={{ experienceMin, feesMax, ratingMin }}
        />
        <AddDoctorDialog />
      </div>

      {/* Doctor list & Pagination */}
      <div className="lg:col-span-4 space-y-6">
        <DoctorList doctors={doctors} />
        <Pagination currentPage={page} totalPages={totalPages} />
      </div>
    </main>
  )
}
