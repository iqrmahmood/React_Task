import React, { useEffect, useState } from 'react';
import './Tickets.css';

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await fetch('http://localhost:5000/tickets');
      const data = await response.json();
      setTickets(data);
      setLoading(false);
    };

    fetchTickets();
  }, []);

  return (
    <div className="tickets">
      <h2>All Tickets</h2>
      {loading ? (
        <p className="loading">Loading tickets...</p>
      ) : (
        <div className="ticket-list">
          {tickets.map(ticket => (
            <div className="ticket-card" key={ticket.id}>
              <h3>{ticket.competitionName}</h3>
              <p><strong>Student:</strong> {ticket.studentName}</p>
              <p><strong>Date:</strong> {ticket.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tickets;
