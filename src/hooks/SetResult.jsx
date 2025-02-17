import * as Action from '../redux/resultReducer';

export const PushAnswer = (result) => async (dispatch) => {
    try {
        await dispatch(Action.pushResultAction(result));
    } catch (error) {
        console.log(error);
    }
};

export const updateResult = (index) => async (dispatch) => {
    try {
        dispatch(Action.updateResultAction(index));
    } catch (error) {
        console.log(error);
    }
};

/** Store user data locally instead of sending it to an API */
export const usePublishResult = (resultData) => {
    const { result, username } = resultData;

    (async () => {
        try {
            if (result.length !== 0 && !username) {
                console.error("Couldn't get Result");
                return;
            }

            /** Store data locally */
            const storedResults = JSON.parse(localStorage.getItem('quizResults')) || [];
            storedResults.push(resultData);
            localStorage.setItem('quizResults', JSON.stringify(storedResults));

        } catch (error) {
            console.log(error);
        }
    })();
};
