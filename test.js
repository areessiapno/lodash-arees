'use strict'

let _ = require('./index.js');


let square = function(num){
	return num * num;
}

let result = _.map([4,6], square)

console.log(result);


let resultCallback = _.mapCallback([4,8], square, function(newcollection){
	console.log(newcollection);
});

console.log(resultCallback); // undefined


let resultPromise = _.mapPromise([4,8], square);

resultPromise
.then(function (newcollection){
	console.log(newcollection);
})
.catch(function (error){
	console.log(error);
});

console.log(resultPromise); // Promise

