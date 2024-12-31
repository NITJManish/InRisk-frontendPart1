export default function DataTable({ data }) {
    const rows = data.time.map((date, idx) => ({
      date,
      maxTemp: data.temperature_2m_max[idx],
      minTemp: data.temperature_2m_min[idx],
    }));
  
    return (
      <div className="bg-white p-4 rounded shadow-md mt-4">
        <h2 className="text-xl font-bold mb-4">Weather Data Table</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2 bg-gray-200">Date</th>
              <th className="border p-2 bg-gray-200">Max Temp</th>
              <th className="border p-2 bg-gray-200">Min Temp</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className={`${idx % 2 === 0 ? "bg-gray-100" : "bg-white"}`}>
                <td className="border p-2">{row.date}</td>
                <td className="border p-2">{row.maxTemp}</td>
                <td className="border p-2">{row.minTemp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  