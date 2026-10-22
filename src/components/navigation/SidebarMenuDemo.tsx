/* ===================================
   SIDEBAR MENU DEMO COMPONENT
   =================================== */
'use client'
import React, { useState } from 'react';
import { SidebarMenu } from './SidebarMenu';
import { sampleSidebarMenuData } from './sidebarMenuData';

export const SidebarMenuDemo: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = (expanded: boolean) => {
    setIsExpanded(expanded);
    // console.log('Sidebar expanded:', expanded);
  };

  const handleSignOut = () => {
    // console.log('Sign out clicked');
    // Add your sign out logic here
  };

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const handleMenuItemClick = (_itemId: string) => {
    // console.log('Menu item clicked:', itemId);
    // Add your navigation logic here
  };

  // Enhanced menu data with click handlers
  const menuData = sampleSidebarMenuData.map(section => ({
    ...section,
    items: section.items.map(item => ({
      ...item,
      onClick: () => handleMenuItemClick(item.id)
    }))
  }));

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarMenu
        sections={menuData}
        isExpanded={isExpanded}
        onToggle={handleToggle}
        onSignOut={handleSignOut}
        brandName="Event Management"
      />

      {/* Main content area */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Admin Dashboard
          </h1>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Sidebar Menu Demo
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-medium text-blue-900 mb-2">Features:</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Expandable/Collapsible sidebar</li>
                  <li>• Organized menu sections</li>
                  <li>• Interactive menu items</li>
                  <li>• Smooth transitions</li>
                  <li>• Responsive design</li>
                  <li>• Sign out functionality</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-medium text-green-900 mb-2">Current State:</h3>
                <p className="text-sm text-green-800">
                  Sidebar is currently <strong>{isExpanded ? 'expanded' : 'collapsed'}</strong>
                </p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-medium text-purple-900 mb-2">Usage:</h3>
                <p className="text-sm text-purple-800">
                  Click the chevron button at the bottom to toggle the sidebar state.
                  Click on menu items to see console logs of navigation events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenuDemo;
