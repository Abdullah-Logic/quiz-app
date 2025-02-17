import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from "axios";

/** Calculate total attempts */
export function attempts_Number(result = []) {
    return result.filter(r => r !== undefined).length;
}

/** Calculate earned points */
export function earnPoints_Number(result = [], answers = [], point = 0) {
    return result
        .map((element, i) => answers[i] === element)
        .filter(Boolean)
        .length * point;

}

/** Determine if the user passed */
export function flagResult(totalPoints = 0, earnPoints = 0) {
    return (totalPoints * 50) / 100 < earnPoints; // Must earn at least 50% to pass
}

/** Check if user exists in Redux state */
export function CheckUserExist({ children }) {
    const auth = useSelector(state => state?.result?.userId);
    return auth ? children : <Navigate to="/" replace />;
}

/** Get data from server with better error handling */
export async function getServerData(url, callback) {
    try {
        const response = await axios.get(url);
        return callback ? callback(response.data) : response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return { error: error.response?.data?.message || "Failed to fetch data" }; // Return a string, not an object
    }
}

/** Post data to server with better error handling */
export async function postServerData(url, result, callback) {
    try {
        const response = await axios.post(url, result);
        return callback ? callback(response.data) : response.data;
    } catch (error) {
        console.error("Error posting data:", error);
        return { error: error.response?.data?.message || "Failed to post data" }; // Return a string, not an object
    }
}
