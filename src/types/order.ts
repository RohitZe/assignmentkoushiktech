export interface Order {
  id: string;
  type: string;
  action: 'Buy' | 'Sell';
  date: string;
  price: string;
  fiat: string;
  amount: string;
  counterparty: string;
  status: 'Completed' | 'Pending';
  icon: string;
}