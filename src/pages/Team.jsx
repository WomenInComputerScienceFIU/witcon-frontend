export default function Team() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1,2,3].map(i => (
          <div key={i} className="bg-white border rounded p-4">
            <div className="h-24 bg-gray-200 rounded mb-3" />
            <div className="font-medium">Member {i}</div>
            <div className="text-sm text-gray-600">Role</div>
          </div>
        ))}
      </div>
    </section>
  );
}
