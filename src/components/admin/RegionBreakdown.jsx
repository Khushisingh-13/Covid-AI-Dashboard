// components/RegionBreakdown.jsx
const RegionBreakdown = () => (
  <div className="card">
    <h3>📍 Regional Case Summary</h3>
    <table>
      <thead>
        <tr>
          <th>Region</th>
          <th>Predicted</th>
          <th>Confirmed</th>
          <th>Risk Level</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Delhi</td><td>150</td><td>140</td><td>⚠️ High</td></tr>
        <tr><td>UP</td><td>80</td><td>85</td><td>🟠 Medium</td></tr>
        <tr><td>Bihar</td><td>40</td><td>42</td><td>🟢 Low</td></tr>
      </tbody>
    </table>
  </div>
);

export default RegionBreakdown;