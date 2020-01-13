import React from 'react';
import data from '../data';
const { users, companies } = data;

// {
//   "name": "Shayne",
//   "id": 1,
//   "state": "Oregon",
//   "companyId": 14
// }
function getCompanyForUser(companyId) {
  return companies.find(company => company.id === companyId).name;
}

function UserList() {
  return (
    <div className='col-sm'>
      <h2>Users</h2>
      {users.map((user, i) => {
        return (
          <div className='card m-2' key={user.name + i}>
            <div className='card-body'>
              <h5 className='card-title'>
                {user.name} from {user.state}
              </h5>
              <p className='card-text'>
                Employee of <b>{getCompanyForUser(user.companyId)}</b>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default UserList;
