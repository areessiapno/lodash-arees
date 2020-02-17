'use strict';

module.exports = {
	map: function (collection, iterate) {
		for (let i=0; i<collection.length; i++){
			collection[i] = iterate(collection[i]);
		}
		return collection;
	},
	mapCallback: function (collection, iteration, callback){
		for (let i=0; i<collection.length; i++){
			collection[i] = iteration(collection[i]);
		}
		callback(collection);
	},
	mapPromise: function (collection, iteration) {
		return new Promise(function(resolve, reject){
			try{
				for (let i=0; i<collection.length; i++){
					collection[i] = iteration(collection[i]);
				}
				resolve(collection);
			}
			catch(error){
				reject(error);
			}
		})
	}
}