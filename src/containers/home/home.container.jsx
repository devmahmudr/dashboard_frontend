import StatisticChart from "../../components/chart/chart";
import "./_home.container.scss";
import CustomPaginationActionsTable from "../../components/doctor/doctor.overview";

function HomeContainer() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* <div className="chart__container">
          <p className="chart__title">Patients</p>
          <StatisticChart />
        </div> */}
        {/* <div className="chart__container">
          <p className="chart__title">Patients</p>
          <StatisticChart />
        </div>
        <div className="chart__container">
          <p className="chart__title">Patients</p>
          <StatisticChart />
        </div> */}
      </div>
        <CustomPaginationActionsTable />
    </div>
  );
}

export default HomeContainer;
