import * as Action from "../redux/ResultReducer";
import axios from "axios";

export const PushAnswer = (result) => async (dispatch) => {
  try {
    await dispatch(Action.pushResultAction(result));
  } catch (error) {
    console.error(error);
  }
};

export const updateResult = (index) => async (dispatch) => {
  try {
    dispatch(Action.updateResultAction(index));
  } catch (error) {
    console.error(error);
  }
};

/** Publish result data to an API */
export const usePublishResult = async (resultData) => {
  const { result, attempts, achieved, points, username } = resultData;
  try {
    // Check if result and username are valid
    if (result.length === 0 || !username) {
      console.error("Couldn't get Result");
      return;
    }
    /** Make API request to store result */
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`,
      {
        username,
        result,
        attempts,
        achieved,
        points,
      }
    );

    if (response.status === 200) {
      console.log("Result stored successfully via API", response);
    } else {
      console.error("Error storing result in API", response);
    }
  } catch (error) {
    console.error("Error making API request", error);
  }
};
