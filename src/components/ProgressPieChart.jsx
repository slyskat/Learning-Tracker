import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

function ProgressPieChart({ data }) {
  return (
    <div>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius="80%"
            label={({ percent }) => `${(percent * 100).toFixed(0)}% `}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProgressPieChart;
