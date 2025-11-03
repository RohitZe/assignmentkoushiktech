const StatCard = ({ title, value, subtitle, icon: Icon, bgColor }: any) => (
  <div className={`${bgColor} rounded-lg p-6 flex justify-between items-start`}>
    <div>
      <p className="text-gray-400 text-sm mb-2">{title}</p>
      <h2 className="text-3xl font-bold text-white mb-1">{value}</h2>
      {subtitle && <p className="text-gray-400 text-sm">{subtitle}</p>}
    </div>
    <div className="bg-white bg-opacity-10 rounded-lg p-3">
      <Icon className="w-6 h-6 text-white" />
    </div>
  </div>
);

export default StatCard;