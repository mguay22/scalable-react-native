import {GET_ALL_USER_INFO_REQUEST_SUCCESS} from './actions';

const initialState = {
  id: 'id1',
  name: 'Michael',
  email: 'michael@example.com',
  accessToken: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USER_INFO_REQUEST_SUCCESS: {
      const {id, name, email} = action.payload;

      return {
        id,
        name,
        email,
      };
    }
    default:
      return state;
  }
};

export {reducer};
