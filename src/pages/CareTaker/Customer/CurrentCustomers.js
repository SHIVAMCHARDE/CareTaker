import React from 'react'
import { Table } from '../../../components/Table';

export const CurrentCustomers = () => {
  const customers = [
    { name: 'John Doe', location: 'New York', date: '2024-06-01' },
    { name: 'Jane Smith', location: 'Los Angeles', date: '2024-06-15' },
    { name: 'Sam Johnson', location: 'Chicago', date: '2024-06-20' },
  ];

  return (
    <Table data={customers} title={"Current Customer"}/>
  );
}
