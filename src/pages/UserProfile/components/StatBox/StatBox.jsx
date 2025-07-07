import { State } from "./StatBox.styles";

export const StatBox = ({ label, value }) => {
  return (
    <State>
      <span className="stat-label">{label}</span>
      {label === "페널티" ? (
        <span className="stat-value">
          <span>{value}</span>
          <span>회</span>
        </span>
      ) : (
        <span className="stat-value">{value}</span>
      )}
    </State>
  );
};
