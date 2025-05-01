# 🩺 DrApolloClone — Frontend (Next.js)

This is the **frontend** of the DrApolloClone project, built entirely using **Next.js App Router**. The application fetches doctor data via backend APIs and displays it with SEO optimization, filter functionality, and pagination.

---

## ✨ Features

### 🔎 Filter & Paginate Doctors
- Doctors can be filtered based on:
  - **Experience (Minimum)**
  - **Rating (Minimum)**
- Pagination is implemented with:
  - Dynamic query params (e.g., `?page=2&experienceMin=3`)
  - Limit set to 5 per page
- Filter logic is handled in the backend but controlled from the frontend UI (`FilterClient.js`)

### ➕ Add Doctor Functionality
- A modal/dialog form allows users to add a new doctor.
- Fields include:
  - Name, Gender, Location, Image URL, Specialization, Experience, Rating
- Calls the backend API `POST /api/doctor/addDoctor` on form submission

### 🌐 SEO Optimized
- Dynamic SEO implemented using `export const metadata` in `page.js` (Next.js App Router)
- Helps improve search engine visibility

---

## 📁 Project Structure

```bash
/frontend
│
├── app/
│   └── doctor/
│       ├── page.js           # Main doctor listing page with filters and pagination
│       ├── FilterClient.js   # Client-side component for filters and Add Doctor modal
│
├── components/
│   ├── DoctorList.js         # Displays the list of doctors
│   ├── Pagination.js         # Pagination component
│
└── lib/
    └── api.js                # Handles API calls to backend
cd frontend
npm install
npm run dev
