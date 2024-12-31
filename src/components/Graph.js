import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Graph({ data }) {
  const chartData = data.temperature_2m_max.map((temp, idx) => ({
    date: data.time[idx],
    maxTemp: temp,
    minTemp: data.temperature_2m_min[idx],
  }));

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Weather Trends</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <XAxis dataKey="date" className="text-sm" />
          <YAxis className="text-sm" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#f8f9fa",
              border: "1px solid #ccc",
            }}
            cursor={{ stroke: "blue" }}
          />
          <Line
            type="monotone"
            dataKey="maxTemp"
            stroke="#ff0000" // Red color for max temperature
            strokeWidth={3} // Thicker line
            activeDot={{ r: 8, fill: "blue" }} // Blue pointer
          />
          <Line
            type="monotone"
            dataKey="minTemp"
            stroke="#00ff00" // Green color for min temperature
            strokeWidth={3} // Thicker line
            activeDot={{ r: 8, fill: "blue" }} // Blue pointer
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
