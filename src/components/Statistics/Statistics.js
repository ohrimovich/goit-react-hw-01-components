import PropTypes from "prop-types";
import s from "./Statistic.module.scss";

function Statistics({ stats }) {
  return (
    <section className="statistics">
      <h2 className={s.title}>Upload stats</h2>

      <ul class={s.list}>
        {stats.map((stat) => (
          <li className={s.item} key={stat.id}>
            <span className={s.label}>{stat.label}</span>
            <span className={s.persent}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
