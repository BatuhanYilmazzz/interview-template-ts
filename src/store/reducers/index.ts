import { ActionType } from '../types';
import { HomeActions } from '../actions';
import produce from 'immer';

export interface HomeState {
    homeData: string[];
    error: string | null;
    loading: boolean;
}

const initialState: HomeState = {
    homeData: [],
    error: null,
    loading: true,
};

const homeReducer: (state: HomeState, action: HomeActions) => HomeState = (
    state: HomeState = initialState,
    action: HomeActions,
): HomeState =>
    produce(state, (draft: any) => {
        switch (action.type) {
            case ActionType.FETCH_HOME_SUCCESS:
                draft.homeData = action.payload;
                draft.loading = false;
                break;
            case ActionType.FETCH_HOME_FAIL:
                draft.error = action.payload;
                draft.loading = false;
                break;
            default:
                break;
        }
    });

export default homeReducer;
