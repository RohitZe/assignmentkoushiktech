import { type Order }from "../../types/order";
const OrderRow = ({ order }: { order: Order }) => {
  const getCryptoIcon = (type: string) => {
    const icons: any = {
      'BTC': '₿',
      'ETH': 'Ξ',
      'BNB': 'BNB',
      'USDT': '₮',
      'SOL': '◎'
    };
    return icons[type] || type;
  };

  return (
    <tr className="border-b border-gray-800 hover:bg-gray-900 transition-colors">
      <td className="py-4 px-4">
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 text-sm">{getCryptoIcon(order.type)}</span>
          <span className="text-white">{order.type}</span>
          <span className={`ml-2 text-sm ${order.action === 'Buy' ? 'text-green-500' : 'text-red-500'}`}>
            {order.action}
          </span>
        </div>
      </td>
      <td className="py-4 px-4 text-gray-400 text-sm">{order.date}</td>
      <td className="py-4 px-4 text-white text-sm">{order.price}</td>
      <td className="py-4 px-4 text-white text-sm">{order.fiat}</td>
      <td className="py-4 px-4 text-white text-sm">{order.amount}</td>
      <td className="py-4 px-4 text-gray-400 font-mono text-sm">{order.counterparty}</td>
      <td className="py-4 px-4">
        <span className={`
          px-3 py-1 rounded-full text-xs font-medium
          ${order.status === 'Completed' 
            ? 'bg-green-900 text-green-300 text-sm' 
            : 'bg-orange-900 text-orange-300 text-sm'
          }
        `}>
          {order.status}
        </span>
      </td>
    </tr>
  );
};

export default OrderRow;