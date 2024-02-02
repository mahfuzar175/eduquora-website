const Stats = () => {
  return ( 
    <div className="flex justify-center items-center">
      <div className="stats stats-vertical lg:stats-horizontal p-28 w-full">
        <div className="stat text-center">
          <div className="stat-value font-serif text-4xl">250</div>
          <div className="stat-title">HAPPY CLIENTS</div>
        </div>

        <div className="stat text-center">
          <div className="stat-value font-serif text-4xl">20</div>
          <div className="stat-title">YEARS OF EXPERIANCE</div>
        </div>

        <div className="stat text-center">
          <div className="stat-value font-serif text-4xl">120</div>
          <div className="stat-title">CLASS COMPLETED</div>
        </div>

        <div className="stat text-center">
          <div className="stat-value font-serif text-4xl">50</div>
          <div className="stat-title">AWARD WINNING</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
