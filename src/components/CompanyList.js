import React from 'react';
import data from '../data';
const { companies } = data;

// {
//   "name": "Fadel Group",
//   "id": 1,
//   "state": "Connecticut"
// }

function CompanyList() {
  return (
    <div className='col-sm'>
      <h2>Companies</h2>
      {companies.map((company, i) => {
        return (
          <div className='card m-2' key={company.name + i}>
            <div className='card-body'>
              <h5 className='card-title'>{company.name}</h5>
              <p className='card-text'>Based out of {company.state}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CompanyList;
