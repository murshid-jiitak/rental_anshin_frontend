import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CompanyList from '../components/CompanyList';
import AddCompanyModal from '../components/AddCompanyModal'; // Assuming modal component
import { useNavigate } from "react-router-dom";


const AdminDashboard = () => {
  // [[],function def]
  // setcompsnies ==function def
  // set copanies is a function defention, when ever we call this function with copmany data as input it wil  assigen new value to company
  // call setcomponies and put new vaulues parameter
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    
  
    if (token) {
      const fetchCompanies = async () => {
        try {
          const options = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          const response = await axios.get('http://localhost:3005/api/admin/companies', options);
          
          setCompanies(response.data.data);
          console.log(response.data.data)
        } catch (error) {
            console.error('Error fetching companies:', error.response.data);
        }
      };
      fetchCompanies();
    } else {
      
      navigate('/');
    }
  }, []);

  return (
    <div className="dashboard-container">
      <main>
        <h1>Admin Dashboard</h1>
        <CompanyList companies={companies} />
        <AddCompanyModal setCompanies={setCompanies} companies={companies} />   
        </main>
    </div>
  );
};

export default AdminDashboard;