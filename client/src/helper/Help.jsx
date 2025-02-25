import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from "axios";

/** Calculate total attempts */
export function attempts_Number(result = []) {
  return result.filter((r) => r !== undefined).length;
}

/** Calculate earned points */
export function earnPoints_Number(result = [], answers = [], point = 0) {
  return (
    result.map((element, i) => answers[i] === element).filter(Boolean).length *
    point
  );
}

/** Determine if the user passed */
export function flagResult(totalPoints = 0, earnPoints = 0) {
  return (totalPoints * 50) / 100 < earnPoints; // Must earn at least 50% to pass
}

/** Check if user exists in Redux state */
export function CheckUserExist({ children }) {
  const auth = useSelector((state) => state?.result?.userId);
  return auth ? children : <Navigate to="/" replace />;
}

/** get server data */
export async function getServerData(url) {
  try {
    const response = await fetch(url);
    console.log("Raw Response:", response); // Check if response object exists

    const data = await response.json();
    console.log("Parsed Data:", data); // Check if data is coming after parsing JSON

    return data;
  } catch (error) {
    console.error("Fetch Error:", error);
    return [];
  }
}
/** post server data */
export async function postServerData(url, result, callback) {
  const data = await (await axios.post(url, result))?.data;
  return callback ? callback(data) : data;
}
