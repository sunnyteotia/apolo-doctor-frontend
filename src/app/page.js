// app/page.jsx
import DoctorCard from './../components/ui/DoctorCard';

async function fetchDoctors() {
  const res = await fetch("http://localhost:3000/api/doctor/list-doctor-with-filter", {
    cache: 'no-store', // Prevents caching for dynamic data
  });
 
  if (!res.ok) {
    throw new Error("Failed to fetch doctors");
  }

  return res.json();
}

export default async function HomePage() {
  const data = await fetchDoctors();

  return (
    <main className="max-w-4xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Consult General Physicians Online</h1>
      {data.doctors && data.doctors.length > 0 ? (
        data.doctors.map((doc, i) => <DoctorCard key={i} doctor={doc} />)
      ) : (
        <p>No doctors found.</p>
      )}
    </main>
  );
}
