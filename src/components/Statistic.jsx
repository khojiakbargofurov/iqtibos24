const statistic = [
  { value: "365+", label: "Iqtiboslar" },
  { value: "12+", label: "Kitoblar" },
  { value: "27.3K", label: "Users" },
];

export const Statistic = () => (
  <div className="px-1 py-8 mx-auto max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="grid sm:grid-cols-3 text-center">
      {statistic.map(({ value, label }) => (
        <div key={label}>
          <h6 className="text-4xl font-bold text-deep-purple-accent-400">{value}</h6>
          <p className="font-bold">{label}</p>
        </div>
      ))}
    </div>
  </div>
);
