import { create } from 'zustand';

export const useBearStore = create(set => ({
  beerStatus: JSON.parse(window.localStorage.getItem('status')) ?? [],
  index: 0,
  limit: 15,
  beers: JSON.parse(window.localStorage.getItem('beers')) ?? [],
  beerId: [],
  shopping: JSON.parse(window.localStorage.getItem('shooping')) ?? [],
  page: 1,
  fetching: false,
  changeStatusBeer: array =>
    set(({ beerStatus }) => ({ beerStatus: [...array] })),
  changeIndex: operator =>
    set(state => ({
      index: operator ? state.index + 5 : state.index - 5,
    })),
  changeLimit: operator =>
    set(state => ({
      limit: operator ? state.limit + 5 : state.limit - 5,
    })),
  addBeers: items => set(() => ({ beers: [...items] })),
  addBeerId: item => set(() => ({ beerId: [...item] })),
  addPage: () => set(state => ({ page: state.page + 1 })),
  addToShopping: bear =>
    set(({ shopping }) => ({ shopping: [...shopping, ...bear] })),
  removeBeerFromShopping: newItems => set(() => ({ shopping: [...newItems] })),
  togglFetching: value => set(state => ({ fetching: value })),
}));

export default useBearStore;
