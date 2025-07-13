import styled from "styled-components";

export const StatusBadge = styled.span`
  font-size: ${(props) => props.fontSize || "12px"};
  color: ${(props) => props.$textColor || "#fff"};
  padding: ${(props) => props.$padding || "4px 8px"};
  border-radius: ${(props) => props.$radius || "6px"};
  font-weight: 500;

  background-color: ${({ $status }) => {
    switch ($status) {
      case "approved":
        return "#2e7d32";
      case "참여":
        return "#34d399";
      case "pending":
        return "#f57c00";
      case "대기":
        return "#facc15";
      case "rejected":
        return "#d32f2f";
      case "주최":
        return "#60a5fa";
      default:
        return "#d4d4d8";
    }
  }};
`;
