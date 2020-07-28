import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});

// Dishes Action Creators::

export const fetchDishes = () => {
  return (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            let error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
        },
        (error) => {
          let errmess = new Error(error.message);
          throw errmess;
        }
      )
      .then((response) => {
        return response.json();
      })
      .then((dishes) => {
        dispatch(addDishes(dishes));
      })
      .catch((error) => {
        dispatch(dishesFailed(error.message));
      });
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

// Comments Action Creators::

export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + 'comments')
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      (error) => {
        let errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => {
      return response.json();
    })
    .then((comments) => {
      dispatch(addComments(comments));
    })
    .catch((error) => {
      dispatch(commentsFailed(error.message));
    });
};

export const commentsFailed = (errmess) => {
  return {
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess,
  };
};

export const addComments = (comments) => {
  return {
    type: ActionTypes.ADD_COMMENTS,
    payload: comments,
  };
};

// Promos Action Creators::

export const fetchPromos = () => {
  return (dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            let error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
        },
        (error) => {
          let errmess = new Error(error.message);
          throw errmess;
        }
      )
      .then((response) => {
        return response.json();
      })
      .then((promos) => {
        dispatch(addPromos(promos));
      })
      .catch((error) => {
        dispatch(promosFailed(error.message));
      });
  };
};

export const promosLoading = () => {
  return {
    type: ActionTypes.PROMOS_LOADING,
  };
};

export const promosFailed = (errmess) => {
  return {
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess,
  };
};

export const addPromos = (promos) => {
  return {
    type: ActionTypes.ADD_PROMOS,
    payload: promos,
  };
};
