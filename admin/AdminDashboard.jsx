import React, { useState } from "react";
import Sidebar from "./Sidebar"; // <== passing onSelect to this!
import Header from "./Header";
import ChartSection from "./ChartSection";
import OutbreakMap from "./OutbreakMap";
import RegionBreakdown from "./RegionBreakdown";
import ModelMetrics from "./ModelMetrics";
import RiskCategory from "./RiskCategory";

const AdminDashboard = () => {
  const [selectedSection, setSelectedSection] = useState("dashboard");

  const renderSection = () => {
    switch (selectedSection) {
      case "dashboard":
        return (
          <>
            <ChartSection />
            <RegionBreakdown />
            <ModelMetrics />
          </>
        );
      case "map":
        return <OutbreakMap />;
      case "input":
        return <div>📝 Prediction Input Section</div>;
      case "categories":
        return <RiskCategory />;
      case "logs":
        return <div>📄 Reports / Logs Section</div>;
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <>
      <style>{`
        .dashboard-container {
          display: flex;
          min-height: 100vh;
          font-family: 'Segoe UI', sans-serif;
        }

        .main-content {
          flex: 1;
          padding: 20px;
          background-color: #f9f9f9;
          margin-left: 240px;
        }
      `}</style>

      <div className="dashboard-container">
        <Sidebar onSelect={setSelectedSection} />  {/* ✅ Fix is here */}
        <div className="main-content">
          <Header />
          {renderSection()}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
