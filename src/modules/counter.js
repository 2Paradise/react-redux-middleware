import {delay, put, takeEvery, takeLatest} from 'redux-saga/effects';

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const INCREASE_ASYNC = 'INCREASE_ASYNC';
const DECREASE_ASYNC = 'DECREASE_ASYNC';

export const increase = () => ({type:INCREASE});
export const decrease = () => ({type:DECREASE});

export const increaseAsync = () => ({type:INCREASE_ASYNC});
export const decreaseAsync = () => ({type:DECREASE_ASYNC});

function* increaseSage() {
    yield delay(1000);
    yield put(increase());
}

function* decreaseSage() {
    yield delay(1000);
    yield put(decrease());
}

export function* counterSaga() {
    yield takeEvery(INCREASE_ASYNC, increaseSage);
    yield takeLatest(DECREASE_ASYNC, decreaseSage);
}

const initialState = 0;

export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default :
            return state;
    }
}