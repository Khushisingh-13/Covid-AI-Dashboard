import React, { useState, useEffect } from "react";


const Doctorpage = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      const querySnapshot = await getDocs(collection(db, "doctors"));
      const doctorList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDoctors(doctorList);
    };
    fetchDoctors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) {
      alert("You must be logged in to book an appointment.");
      return;
    }
    try {
      await addDoc(collection(db, "appointments"), {
        userId: user.uid,
        doctorId: selectedDoctor,
        appointmentDate: Timestamp.fromDate(new Date(date)),
        createdAt: Timestamp.now(),
      });
      setMessage("Appointment booked successfully!");
      setSelectedDoctor("");
      setDate("");
    } catch (err) {
      console.error("Error booking appointment:", err);
      setMessage("Failed to book appointment.");
    }
  };

  return (
    <div style={{
      maxWidth: "400px",
      margin: "40px auto",
      padding: "20px",
      background: "#ffffff",
      boxShadow: "0 0 20px rgba(0,0,0,0.1)",
      borderRadius: "16px"
    }}>
      <h2>Book a Doctor Appointment</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <label style={{ fontWeight: "bold" }}>Choose Doctor:</label>
        <select
          value={selectedDoctor}
          onChange={(e) => setSelectedDoctor(e.target.value)}
          required
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        >
          <option value="">-- Select Doctor --</option>
          {doctors.map((doc) => (
            <option key={doc.id} value={doc.id}>
              Dr. {doc.name} ({doc.specialty})
            </option>
          ))}
        </select>

        <label style={{ fontWeight: "bold" }}>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "8px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Book Appointment
        </button>

        {message && (
          <p style={{
            marginTop: "10px",
            fontWeight: "bold",
            color: "green"
          }}>{message}</p>
        )}
      </form>
    </div>
  );
};

export default Doctorpage;
