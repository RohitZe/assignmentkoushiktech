import { Home, Layers, FileText, Gift, BarChart3, Users, ChevronRight, X } from 'lucide-react';
const Sidebar = ({ isOpen, onClose }: any) => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', active: false },
    { icon: Layers, label: 'Assets', active: false },
    { icon: FileText, label: 'Orders', active: false },
    { icon: Gift, label: 'Rewards', active: false },
    { icon: BarChart3, label: 'Reports', active: false },
    { icon: Users, label: 'P2P orders', active: true },
  ];

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-black border-r border-gray-800
        transform transition-transform duration-200 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 border-b border-gray-800 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">EXLM</h1>
          <button onClick={onClose} className="lg:hidden text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="p-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2
                transition-colors
                ${item.active 
                  ? 'bg-gray-900 text-white' 
                  : 'text-gray-400 hover:bg-gray-900 hover:text-white'
                }
              `}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className=" from-purple-900 to-purple-700 rounded-lg p-4 cursor-pointer hover:opacity-90 transition-opacity">
            <h3 className="text-white font-semibold mb-1">Unlock VIP Benefits</h3>
            <p className="text-purple-200 text-sm mb-2">Learn more →</p>
          </div>
          
          <button className="w-full flex items-center gap-3 px-4 py-3 mt-4 hover:bg-gray-900 rounded-lg transition-colors">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-semibold">
              A
            </div>
            <div className="flex-1 text-left">
              <p className="text-white text-sm font-medium">Adrian</p>
              <p className="text-gray-400 text-xs">3kLb5l...i0Kf</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;