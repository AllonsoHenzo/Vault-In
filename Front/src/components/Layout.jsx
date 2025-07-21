import React from 'react'
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />

      <main className="pt-16 pl-64 p-4">
        {children}
      </main>
    </div>
  )
}

export default Layout