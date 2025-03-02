import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getServerData } from "../helper/Help";

/** redux actions */
import * as Action from "../redux/QuestionReducer";

/** fetch question hook to fetch api data and set value to store */
export const useFetchQuestion = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });

  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }));

    /** async function fetch backend data */
    (async () => {
      try {

        const result = await getServerData(
          `${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`
        );

        if (!result || result.length === 0) {
          throw new Error("No data received from the server.");
        }

        const [{ questions, answers }] = result;
        console.log(questions, answers);

        if (questions.length > 0) {
          setGetData((prev) => ({ ...prev, isLoading: false }));
          setGetData((prev) => ({ ...prev, apiData: questions }));

          /** dispatch an action */
          dispatch(Action.startExamAction({ question: questions, answers }));
        } else {
          throw new Error("No Question Avalibale");
        }
      } catch (error) {
        setGetData((prev) => ({ ...prev, isLoading: false }));
        setGetData((prev) => ({ ...prev, serverError: "error" }));
      }
    })();
  }, [dispatch]);

  return [getData, setGetData];
};
/** MoveAction Dispatch function */
export const MoveNextQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.moveNextAction()); 
  } catch (error) {
    console.log("Error moving to next question:", error);
  }
};

/** PrevAction Dispatch function */
export const MovePrevQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.movePrevAction()); 
  } catch (error) {
    console.log("Error moving to previous question:", error);
  }
};
