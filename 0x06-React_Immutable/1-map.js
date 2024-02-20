// convert javascript object to immutable Map object
import { Map } from 'immutable';

const getImmutableObject = (object) => {
    return Map(object);
}

export default getImmutableObject;