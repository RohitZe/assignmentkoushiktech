import { type Order } from "../../types/order";
const MobileOrderCard = ({ order }: { order: Order }) => {
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
    <div className="bg-gray-900 rounded-lg p-4 mb-3">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 text-xl">{getCryptoIcon(order.type)}</span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-white font-medium">{order.type}</span>
              <span className={`text-sm ${order.action === 'Buy' ? 'text-green-500' : 'text-red-500'}`}>
                {order.action}
              </span>
            </div>
            <p className="text-gray-400 text-xs">{order.date}</p>
          </div>
        </div>
        <span className={`
          px-3 py-1 rounded-full text-xs font-medium
          ${order.status === 'Completed' 
            ? 'bg-green-900 text-green-300' 
            : 'bg-orange-900 text-orange-300'
          }
        `}>
          {order.status}
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <p className="text-gray-400">Price</p>
          <p className="text-white font-medium">{order.price}</p>
        </div>
        <div>
          <p className="text-gray-400">Fiat</p>
          <p className="text-white font-medium">{order.fiat}</p>
        </div>
        <div>
          <p className="text-gray-400">Amount</p>
          <p className="text-white font-medium">{order.amount}</p>
        </div>
        <div>
          <p className="text-gray-400">Counterparty</p>
          <p className="text-white font-mono text-xs">{order.counterparty}</p>
        </div>
      </div>
    </div>
  );
};

export default MobileOrderCard;