import React, { useState } from 'react';


const CompanyList = ({ companies }) => {
    
    // const [searchQuery, setSearchQuery] = useState('');
    // const [sortedColumn, setSortedColumn] = useState('');
    // const [isSortedAscending, setIsSortedAscending] = useState(true);
  
    // const handleSearch = (query) => {
    //     setSearchQuery(query);
    //   };
      
    //   const handleSort = (column) => {
    //     setSortedColumn(column);
    //     setIsSortedAscending(!isSortedAscending);
    //   };
      
    //   const filteredCompanies = companies.filter((company) => {
    //     return company.name.toLowerCase().includes(searchQuery.toLowerCase());
    //   });
    
      // ... sorting logic using a stable sorting algorithm like `array.sort()`


      
    return (
      <table className="company-list">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Registerd On</th>
            <th>Email ID</th>
            <th>Address</th>
            <th>Login status</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.email}>
              <td>{company.companyName}</td>
              <td>{company.registeredOn}</td>
              <td>{company.email}</td>
              <td>{company.mobNumber}</td>
              <td>{company.isLogged ? 'Loggged' : 'Not logged'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default CompanyList;
  