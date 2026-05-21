import React from 'react';
import LayoutWrapper from './components/layout/LayoutWrapper';
import DataTable from './components/dashboard/DataTable';
import AnalyticsCard from './components/dashboard/AnalyticsCard';

export default function App() {
  return (
    <LayoutWrapper>
      <DataTable />
      <AnalyticsCard />
    </LayoutWrapper>
  );
}