import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import { useEffect, useState } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';

import './App.scss';
import UserService from './services/userService';

export default function App() {

  const userService = new UserService();

  const [users, setUsers] = useState([]);
  const [globalFilter, setGlobalFilter] = useState(null);

  useEffect(() => {
    userService.getUsers().then((response) => {
      console.log('response', response);
      setUsers(response);
    });
  }, []);

  const renderHeader = () => {
    return (
      <div className="table-header">
        <h2>List of Users</h2>
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search" />
        </span>
      </div>
    );
  }

  return (
    <div className="main-container">
      <DataTable className="table" value={users} globalFilter={globalFilter} header={renderHeader()} >
        <Column field="name" header="Nome"></Column>
        <Column field="username" header="Username"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="address.city" header="City"></Column>
      </DataTable>
    </div>
  );
}
