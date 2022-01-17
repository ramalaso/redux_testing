import { increaseCount, reducer, store } from "./counter";

describe('Counter', () => {
   it('should have a default state', () => {
      const result = reducer();
      expect(result.count).toEqual(0);
   });

   it('should increase the count', () => {
      const action = increaseCount();
      const result = reducer(undefined, action);
      expect(result.count).toEqual(1);
   });

   it('should increase the count with a custom value', () => {
      const action = increaseCount(5);
      const result = reducer(undefined, action);
      expect(result.count).toEqual(5)
   });
});

describe('Sheep counting store', function() {
   it('should return the state', () => {
      const state = store.getState();
      expect(state.count).toEqual(0);
   });

   it('should dispatch actions and update the state', () => {
      const action = increaseCount();
      store.dispatch(action);
      expect(store.getState().count).toEqual(1);
   });

   it('should call the subscribers when the store data changes', () => {
      const listener = jest.fn();
      store.subscribe(listener);
      const action = increaseCount();
      store.dispatch(action)
      expect(listener).toHaveBeenCalled();
   });
})
