import React, { useState, useEffect } from 'react';

const AdminLogin = () => {
  const [data, setData] = useState({ access_token: '', expiry_date: '' });

  const fetchData = async () => {
    try {
      //const response = await fetch('https://technoforum.onrender.com/api/get-token');
      const response = await fetch('https://localhost:5000/api/get-token');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleGenerateToken = async () => {
    try {
      //const response = await fetch('https://technoforum.onrender.com/api/generate-token', {
       const response = await fetch('https://localhost:5000/api/generate-token', {
     
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error generating token:', error);
    }
  };

  const isTokenExpired = () => {
    if (!data.expiry_date) return false;
    const expiryDate = new Date(data.expiry_date);
    return expiryDate < new Date();
  };

  return (
    <div
    style={{
      border: "2px solid black",
      width: "30vw",
      height: "30vh",
      padding: 10,
      margin: 10
    }}
    >
      <h1>Access Token: {data.access_token}</h1>
      <p className={isTokenExpired() ? 'expired' : ''}>Expiry Date: {data.expiry_date}</p>
      <button onClick={handleGenerateToken}>GENERATE TOKEN</button>
    </div>
  );
};

export default AdminLogin;