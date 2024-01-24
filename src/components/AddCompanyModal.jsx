import React, { useState } from 'react';
import axios from 'axios';

const AddCompanyModal = ({ setCompanies, companies }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
 

  // ... other fields as needed

  // ... handle form submission and API call logic

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        // Handle the case where there is no token (authentication error)
        return;
      }

      const options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      

      const response = await axios.post(
        'http://localhost:3005/api/admin/companies',
        {
          companyName,
          phoneNumber, // Fixed typo here, 'number' should be 'phoneNumber'
          email,
        },
        options
      );
      const {data} = response
      // console.log(data)

      setIsModalOpen(false);
      setCompanyName('');
      setPhoneNumber('');
      setEmail('');

      const newCompany = response.data;
      console.log(newCompany)
      // console.log(companies)
      setCompanies([...companies, newCompany]);

      // Handle feedback (e.g., display a success message)
    } catch (error) {
      // Handle errors:
      console.error(error);
      // Display error message to the user
    }
  };


  return (
    <div>
      {/* Trigger to open the modal */}
      <button onClick={() => setIsModalOpen(true)}>Add Company</button>

      {isModalOpen && (
        <div className="modal">
          <h2>Add New Company</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="companyName">Company Name:</label>
              <input type="text" id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
            </div>
            <div>
              <label htmlFor="phoneNumber">Company Mobile no:</label>
              <input type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
            <div>
              <label htmlFor="email">Company mail ID:</label>
              <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button type="submit">Add Company</button>
          </form>
        </div>
      )}
    </div>
  );
};
//.,fw

export default AddCompanyModal;