// src/components/Appointment.jsx
import React, { useState } from 'react';

const dummyDoctors = [
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    specialization: 'General Physician',
    availableSlots: ['10:00 AM', '12:30 PM', '4:00 PM'],
  },
  {
    id: 2,
    name: 'Dr. Arjun Mehta',
    specialization: 'Pulmonologist',
    availableSlots: ['11:00 AM', '1:00 PM', '3:00 PM'],
  },
];

const Appointment = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const handleBook = () => {
    if (selectedDoctor && selectedSlot) {
      setConfirmation(
        `Appointment confirmed with ${selectedDoctor.name} at ${selectedSlot}`
      );
      setSelectedSlot('');
    }
  };

  return (
    <div>
      <h3>Available Doctors</h3>
      <div>
        {dummyDoctors.map((doc) => (
          <div
            key={doc.id}
            style={{
              border: '1px solid #94a3b8',
              borderRadius: '10px',
              padding: '1rem',
              marginBottom: '1rem',
              background: '#f1f5f9',
            }}
          >
            <h4>{doc.name}</h4>
            <p>{doc.specialization}</p>
            <p><strong>Available Slots:</strong></p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {doc.availableSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => {
                    setSelectedDoctor(doc);
                    setSelectedSlot(slot);
                    setConfirmation('');
                  }}
                  style={{
                    padding: '0.4rem 0.8rem',
                    backgroundColor: selectedSlot === slot && selectedDoctor?.id === doc.id ? '#475569' : '#cbd5e1',
                    color: selectedSlot === slot && selectedDoctor?.id === doc.id ? '#fff' : '#000',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <button
          onClick={handleBook}
          style={{
            marginTop: '1rem',
            padding: '0.6rem 1.2rem',
            backgroundColor: '#0f172a',
            color: '#ffffff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
          disabled={!selectedDoctor || !selectedSlot}
        >
          Book Appointment
        </button>
        {confirmation && (
          <p style={{ marginTop: '1rem', color: 'green' }}>{confirmation}</p>
        )}
      </div>
    </div>
  );
};

export default Appointment;
