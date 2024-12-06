import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppLayout } from './components/layout/AppLayout'

function App() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="card p-6">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-gray-500">Welcome to your startup dashboard</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Sample metric cards */}
          <div className="card p-6">
            <h3 className="text-lg font-medium text-gray-900">Total Leads</h3>
            <p className="mt-2 text-3xl font-semibold text-primary-600">0</p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-medium text-gray-900">Active Deals</h3>
            <p className="mt-2 text-3xl font-semibold text-primary-600">0</p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-medium text-gray-900">Conversion Rate</h3>
            <p className="mt-2 text-3xl font-semibold text-primary-600">0%</p>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default App
