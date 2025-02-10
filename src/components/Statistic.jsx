const statistic = [
  { value: "365+", label: "Iqtiboslar" },
  { value: "12+", label: "Kitoblar" },
  { value: "27.3K", label: "Users" },
];

export const Statistic = () => (
  <div className="px-1 mx-auto max-w-screen-xl md:px-24 sm:px-8  pt-24">
    <div className="grid sm:grid-cols-3 text-center gap-8">
      {statistic.map(({ value, label }) => (
        <div key={label} className="border border-gray-300 rounded-xl p-8 shadow-lg animate-pulse">
          <h6 className="sm:text-4xl text-3xl font-bold text-deep-purple-accent-400">{value}</h6>
          <p className="font-bold">{label}</p>
        </div>
      ))}
    </div>
  </div>
);
