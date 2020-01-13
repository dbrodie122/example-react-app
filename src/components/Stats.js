import React from 'react';
import data from '../data';

const { companies, users, products } = data;

function getStats(collection, key) {
  const dict = collection.reduce((acc, item) => {
    if (acc[item[key]]) {
      acc[item[key]]++;
    } else {
      acc[item[key]] = 1;
    }
    return acc;
  }, {});

  let resultVal = '';
  let currentMax;
  Object.entries(dict).forEach(entry => {
    if (!resultVal) {
      resultVal = entry[0];
      currentMax = entry[1];
    }
    if (entry[1] > currentMax) {
      currentMax = entry[1];
      resultVal = entry[0];
    }
  });
  return [resultVal, currentMax];
}

const mostUsedProduct = getStats(products, 'material');
const stateWithMostUsers = getStats(users, 'state');
const stateWithMostCompanies = getStats(companies, 'state');

function Stats() {
  return (
    <div>
      <h2>Stats</h2>
      <div className='card m-2'>
        <div className='card-body'>
          <h5 className='card-title'>State with Most Users</h5>
          <p className='card-text'>
            {stateWithMostUsers[1]} users in {stateWithMostUsers[0]}
          </p>
        </div>
      </div>
      <div className='card m-2'>
        <div className='card-body'>
          <h5 className='card-title'>State with Most Companies</h5>
          <p className='card-text'>
            {stateWithMostCompanies[1]} companies in {stateWithMostCompanies[0]}
          </p>
        </div>
      </div>
      <div className='card m-2'>
        <div className='card-body'>
          <h5 className='card-title'>Most Common Product Material</h5>
          <p className='card-text'>
            {mostUsedProduct[0]} was used {mostUsedProduct[1]} times
          </p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
