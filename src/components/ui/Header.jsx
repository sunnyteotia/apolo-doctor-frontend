'use client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import AddDoctorForm from './AddDoctorForm'

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold text-gray-800">Find Your Doctor</h1>
      <div className="flex items-center gap-4">
        {/* Add Doctor Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default" className="rounded-full">
              + Add Doctor
            </Button>
          </DialogTrigger>
          <DialogContent>
            <AddDoctorForm />
          </DialogContent>
        </Dialog>

        {/* Login Icon */}
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-semibold cursor-pointer">
          U
        </div>
      </div>
    </header>
  )
}
