import { fromJS } from 'immutable';

// converts javascript object to immutable object using fromJS
const getImmutableObject = (object) => fromJS(object);
export default getImmutableObject;