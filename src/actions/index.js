import * as types from './types';

export const addTodo = todo => ({ type: types.ADD_TODO, payload: { todo } });

export const removeTodo = todo => ({ type: types.REMOVE_TODO, payload: { todo } });

export const udpateTodo = todo => ({ type: types.UPDATE_TODO, payload: { todo } });

export const filterTodo = filter => ({ type: types.FILTER_TODO, payload: { filter } });

export const showState = state => ({ type: types.SHOW_STATE, payload: { state } });
