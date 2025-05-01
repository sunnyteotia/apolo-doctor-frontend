export async function getDoctorsWithFilter(queryString) {
    const res = await fetch(`http://localhost:3000/api/doctor/list-doctor-with-filter?${queryString}`, {
      cache: 'no-store'
    })
  
    if (!res.ok) {
      throw new Error('Failed to fetch doctors')
    }
  
    return await res.json()
  }
  