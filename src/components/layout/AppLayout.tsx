import { ReactNode } from 'react';
import { Menu, Home, Users, MessageSquare, FileText, Settings } from 'lucide-react';

interface AppLayoutProps {
  children: ReactNode;
}

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Leads', href: '/leads', icon: Users },
  { name: 'Messages', href: '/messages', icon: MessageSquare },
  { name: 'Documents', href: '/documents', icon: FileText },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200">
        <div className="flex items-center h-16 px-4 border-b border-gray-200">
          <span className="text-xl font-semibold text-gray-800">Startup</span>
        </div>
        <nav className="p-4 space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center px-3 py-2 text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 group"
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="pl-64">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200">
          <div className="flex items-center justify-between h-full px-4">
            <button type="button" className="p-2 text-gray-400 hover:text-gray-500">
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center space-x-4">
              <button type="button" className="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500">
                <span className="sr-only">View notifications</span>
                <div className="w-6 h-6 rounded-full bg-gray-200" />
              </button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
