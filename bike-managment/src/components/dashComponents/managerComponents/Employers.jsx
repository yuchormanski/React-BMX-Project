import { useEffect } from "react";
import { useEmployers } from "../../../customHooks/useEmployers.js";
import styles from "./Employers.module.css";

function Employers() {
  const employersList = useEmployers();
  return;
}

export default Employers;
