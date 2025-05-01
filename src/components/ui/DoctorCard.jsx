'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { Star } from 'lucide-react'
const fallbackImage = "https://cdn-icons-png.flaticon.com/512/3774/3774299.png";

export default function DoctorCard({ doctor }) {
  return (
    <Card className="flex flex-row items-center gap-4 p-4 rounded-2xl shadow hover:shadow-lg transition-all">
      <div className="min-w-[100px] h-[100px] rounded-full overflow-hidden">
        <Image
          src={doctor?.Photo || fallbackImage}
          alt={doctor?.name}
          width={100}
          height={100}
          className="object-cover w-full h-full"
        />
      </div>

      <CardContent className="flex-1 px-0">
        <h2 className="text-lg font-semibold">{doctor.name}</h2>
        <p className="text-sm text-gray-600">{doctor.specialization}</p>
        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-700">
          <Badge variant="secondary">Experience: {doctor.experience} yrs</Badge>
          <Badge variant="outline">Fees: ₹{doctor.consultationFee}</Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-900 fill-yellow-400" />
            {doctor.rating }
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
