import { getStockData } from "../../../util/util.js";
import styles from "./UserHomeScreenSelection.module.css";

function UserHomeScreenSelection() {
  const bikeId = getStockData();
  console.log(bikeId);
  return <div>home selection</div>;
}

export default UserHomeScreenSelection;
