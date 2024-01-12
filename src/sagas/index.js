import { all } from 'redux-saga/effects';
import DataSagas from './data';

export default function* rootSaga() {
    yield all([
        ...DataSagas,
    ]);
}