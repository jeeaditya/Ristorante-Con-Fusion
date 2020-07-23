import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';

export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});

export const fetchDishes = () => {
  return (dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout(() => {
      dispatch(addDishes(DISHES));
    }, 3000);
  };
};

export const dishesLoading = () => {
  return {
    type: ActionTypes.DISHES_LOADING,
  };
};

export const dishesFailed = (errmess) => {
  return {
    type: ActionTypes.DISHES_FAILED,
    payload: errmess,
  };
};

export const addDishes = (dishes) => {
  return {
    type: ActionTypes.ADD_DISHES,
    payload: dishes,
  };
};
