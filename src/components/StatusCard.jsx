export default function StatusCard({ title, value }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow text-center">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}
