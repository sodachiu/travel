'use strict';

export default {
  changeCity (state, city) {
    try {
      localStorage.city = city;
    } catch (e) {
      console.log('localstorage err: ' + e);
    }
    state.city = city;
  }
};
