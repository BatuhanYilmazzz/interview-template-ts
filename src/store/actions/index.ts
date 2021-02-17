import { ActionType } from '../types';

export interface SearchHomeAction {
    type: ActionType.FETCH_HOME;
}

export interface SearchHomeSuccessAction {
    type: ActionType.FETCH_HOME_SUCCESS;
    payload: string[];
}

export interface SearchHomeErrorAction {
    type: ActionType.FETCH_HOME_FAIL;
    payload: string;
}

export const fetchHome: () => SearchHomeAction = (): SearchHomeAction => {
    return {
        type: ActionType.FETCH_HOME,
    };
};
export const fetchHomeSuccess: (data: string[]) => SearchHomeSuccessAction = (
    data: string[],
): SearchHomeSuccessAction => {
    return {
        type: ActionType.FETCH_HOME_SUCCESS,
        payload: data,
    };
};
export const fetchHomeFail: (error: string) => SearchHomeErrorAction = (error: string): SearchHomeErrorAction => {
    return {
        type: ActionType.FETCH_HOME_FAIL,
        payload: error,
    };
};

export type HomeActions = SearchHomeAction | SearchHomeSuccessAction | SearchHomeErrorAction;
