import {drinks} from './data/margaritasData';

//all earthquakes around the world last weekend
export const eqAPI = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-03-21&endtime=2019-03-23&orderby=magnitude';

export const getMeACocktail = () => {
  return new Promise(resolve =>
      setTimeout(() => resolve(drinks),2000)
    );
}
