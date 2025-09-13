import { useEffect, useState } from "react";

export default function Admin() {
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/attendees/`)
        .then((res) => res.json())
        .then((data) => setAttendees(data.results || []))
        .catch((err) => console.error("Error fetching attendees:", err));
},  []);

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Admin Dashboard</h2>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border rounded p-4">
          <div className="text-sm text-gray-500">Total Users</div>
          <div className="text-2xl font-semibold mt-1">{attendees.length}</div>
        </div>
        <div className="bg-white border rounded p-4">
          <div className="text-sm text-gray-500">Resumes Uploaded</div>
          <div className="text-2xl font-semibold mt-1">
            {attendees.filter((a) => a.resume).length}
          </div>
        </div>
        <div className="bg-white border rounded p-4">
          <div className="text-sm text-gray-500">Open Registrations</div>
          <div className="text-2xl font-semibold mt-1">✔</div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border rounded">
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h3 className="font-semibold">Recent Attendees</h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-4 gap-2 text-sm font-medium">
            <div>Name</div><div>Email</div><div>School</div><div>Actions</div>
          </div>
          {attendees.length > 0 ? (
            attendees.slice(0, 5).map((a) => (
              <div key={a.id} className="grid grid-cols-4 gap-2 text-sm py-1">
                <div>{a.first_name} {a.last_name}</div>
                <div>{a.email}</div>
                <div>{a.school || "-"}</div>
                <div>
                  <button className="text-blue-600 hover:underline">Edit</button>
                </div>
              </div>
            ))
          ) : (
            <div className="h-24 mt-2 bg-gray-50 border rounded flex items-center justify-center text-sm text-gray-500">
              No attendees yet
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


// export default function Admin() {
//   return (
//     <section className="space-y-6">
//       <h2 className="text-2xl font-bold">Admin Dashboard</h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {["Total Users", "Resumes Uploaded", "Open Registrations"].map((label, idx) => (
//           <div key={idx} className="bg-white border rounded p-4">
//             <div className="text-sm text-gray-500">{label}</div>
//             <div className="text-2xl font-semibold mt-1">0</div>
//           </div>
//         ))}
//       </div>

//       <div className="bg-white border rounded">
//         <div className="flex items-center justify-between px-4 py-3 border-b">
//           <h3 className="font-semibold">Recent Attendees</h3>
//           <button className="px-3 py-1.5 text-sm border rounded">Add New</button>
//         </div>
//         <div className="p-4">
//           <div className="grid grid-cols-4 gap-2 text-sm font-medium">
//             <div>Name</div><div>Email</div><div>School</div><div>Actions</div>
//           </div>
//           <div className="h-24 mt-2 bg-gray-50 border rounded flex items-center justify-center text-sm text-gray-500">
//             Table placeholder
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
