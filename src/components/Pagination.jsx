'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function Pagination({ currentPage, totalPages }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const goToPage = (pageNumber) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", pageNumber)
    const query = params.toString()
    router.push(`${pathname}?${query}`)
  }

  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }

  return (
    <div className="flex justify-center space-x-2 py-6">
      {pages.map((page) => (
        <Button
          key={page}
          variant={page === currentPage ? 'default' : 'outline'}
          onClick={() => goToPage(page)}
        >
          {page}
        </Button>
      ))}
    </div>
  )
}
