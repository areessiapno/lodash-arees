'use strict';

module.exports = {
	map: function (collection, iterate) {
		for (let i=0; i<collection.length; i++){
			collection[i] = iterate(collection[i]);
		}
		return collection;
	}
}