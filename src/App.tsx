import  { useState } from 'react';
import {  Menu, TrendingUp, CheckCircle, AlertTriangle, DollarSign, Search, RefreshCw, Wallet, Sun } from 'lucide-react';
import { type Order } from './types/order';
import Sidebar from './components/layout/Sidebar';
import StatCard from './components/stats/StatCard';
import OrderRow from './components/orders/OrderRow';
import MobileOrderCard from './components/orders/MobileOrderCard';
const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('P2P Order');

  const orders: Order[] = [
    { id: '1', type: 'BTC', action: 'Sell', date: 'Oct 3, 2025', price: '$118,552.05', fiat: '$11,851.62', amount: '0.10 BTC', counterparty: '7Df4a...QxT9', status: 'Completed', icon: '₿' },
    { id: '2', type: 'ETH', action: 'Sell', date: 'Oct 3, 2025', price: '$4,375.92', fiat: '$612.63', amount: '0.14 ETH', counterparty: '2Lp8h...VnR3', status: 'Pending', icon: 'Ξ' },
    { id: '3', type: 'BNB', action: 'Sell', date: 'Oct 2, 2025', price: '$1,037.20', fiat: '$310.98', amount: '0.30 BNB', counterparty: 'X9q7z...T5pK', status: 'Completed', icon: 'BNB' },
    { id: '4', type: 'USDT', action: 'Buy', date: 'Oct 2, 2025', price: '$1.00', fiat: '$845.60', amount: '845.6 USDT', counterparty: '9Rb2m...GdW8', status: 'Pending', icon: '₮' },
    { id: '5', type: 'BNB', action: 'Buy', date: 'Oct 1, 2025', price: '$1,035.44', fiat: '$2,484.94', amount: '2.40 BNB', counterparty: '1Hz6x...PkJ1', status: 'Pending', icon: 'BNB' },
    { id: '6', type: 'BTC', action: 'Buy', date: 'Oct 1, 2025', price: '$118,433.82', fiat: '$592.17', amount: '0.005 BTC', counterparty: 'Z3a5v...LmN4', status: 'Completed', icon: '₿' },
    { id: '7', type: 'ETH', action: 'Sell', date: 'Sep 30, 2025', price: '$4,432.04', fiat: '$354.56', amount: '0.08 ETH', counterparty: '8Yt9q...BcX6', status: 'Completed', icon: 'Ξ' },
    { id: '8', type: 'USDT', action: 'Sell', date: 'Sep 28, 2025', price: '$1.00', fiat: '$128.40', amount: '128.4 USDT', counterparty: '4Np3s...HrF2', status: 'Pending', icon: '₮' },
    { id: '9', type: 'SOL', action: 'Buy', date: 'Sep 27, 2025', price: '$223.24', fiat: '$669.72', amount: '3.00 SOL', counterparty: '6Qb1z...NtV8', status: 'Completed', icon: '◎' },
  ];

  const tabs = ['Assets History', 'Spot Order', 'P2P Order', 'Payment History'];

  return (
    <div className="flex h-screen bg-black overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <main className="flex-1 overflow-auto">
<header className="bg-black border-b border-gray-800 px-4 lg:px-6 py-4">
  <div className="flex items-center justify-between">
    <button 
      onClick={() => setSidebarOpen(true)}
      className="lg:hidden text-gray-400 hover:text-white"
    >
      <Menu className="w-6 h-6" />
    </button>
    <nav className="hidden lg:flex items-center gap-6">
      {['All Assets', 'Markets', 'Trade', 'Tools', 'More'].map((item) => (
        <button 
          key={item} 
          className="text-gray-400 text-sm hover:text-white transition-colors"
        >
          {item}
        </button>
      ))}
    </nav>
    <div className="flex items-center gap-4">
      <button className="text-gray-400 hover:text-white">
        <Search className="w-5 h-5" />
      </button>
      <button className="text-gray-400 hover:text-white">
        <Wallet className="w-5 h-5" />
      </button>
      <button className="text-gray-400 hover:text-white">
        <Sun className="w-5 h-5" />
      </button>
    </div>
  </div>
</header>


        <div className="p-4 lg:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatCard
              title="Total Orders" 
              value="1,284" 
              icon={TrendingUp}
              bgColor="bg-gradient-to-br from-indigo-900 to-indigo-700"
            />
            <StatCard 
              title="Completed Orders" 
              value="1,176" 
              subtitle="(91.6%)"
              icon={CheckCircle}
              bgColor="bg-gradient-to-br from-emerald-900 to-emerald-700"
            />
            <StatCard 
              title="Dispute Rate" 
              value="2.4%" 
              icon={AlertTriangle}
              bgColor="bg-gradient-to-br from-orange-900 to-orange-700"
            />
            <StatCard 
              title="Volume Traded" 
              value="$482,930" 
              icon={DollarSign}
              bgColor="bg-gradient-to-br from-slate-800 to-slate-700"
            />
          </div>
          <div className="bg-gray-900 rounded-lg p-4 mb-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`
                      px-3 py-2 rounded-lg whitespace-nowrap transition-colors
                      ${activeTab === tab 
                        ? 'bg-white text-sm text-black font-medium' 
                        : 'text-gray-400 text-sm hover:text-white'
                      }
                    `}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button className="flex items-center gap-2 px-3 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-sm">
                  <Search className="w-4 h-4" />
                </button>
                <button className="px-3 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-sm">
                  All coins ▼
                </button>
                <button className="px-3 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-sm">
                  All currency ▼
                </button>
                <button className="px-3 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-sm">
                  Order type ▼
                </button>
                <button className="px-3 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-sm">
                  Sep - Nov ▼
                </button>
                <button className="flex items-center gap-2 px-3 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:block bg-gray-900 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Type</th>
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Date</th>
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Price</th>
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Fiat</th>
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Amount</th>
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Counterparty</th>
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <OrderRow key={order.id} order={order} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="lg:hidden">
            {orders.map((order) => (
              <MobileOrderCard key={order.id} order={order} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
