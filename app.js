var jsonString = "{ \"foo\" : \"bar\"}";
console.log(typeof jsonString, jsonString);
console.log(jsonString.foo);

var result = JSON.parse(jsonString);
console.log(typeof result, result);
console.log(result.foo);

var stringified = JSON.stringify(result);
console.log(typeof stringified, stringified);

console.log('above $.ajax');
$.get('http://swapi.co/api/people')
  .then(function(data) {

    for (var i = 0; i < data.results.length; i++) {
      var person = data.results[i];
      $('#container').append('<li>' + person.name + '</li>');
    }
    console.log('inside promise.then');
    console.log(data);
  })
  .catch(function() {
    console.log('An error occurred');
  }
);
console.log('below $.ajax');


// Example of recursively requesting all of the people data from the API
// $(function() {
//   $.get('http://swapi.co/api/people/')
//     .then(crawlApiForMoreData)
//     .catch(logErrors);
// });
//
// function logErrors(xhr, status, error) {
//   console.log(xhr);
//   console.log(status);
//   console.log(error);
// }
//
// function crawlApiForMoreData(data) {
//   for(person of data.results){
//     $('#container').append('<li>' + person.name + '</li>');
//   }
//
//   if (data.next) {
//     $.get(data.next)
//       .then(crawlApiForMoreData)
//       .catch(logErrors);
//   } else {
//     console.log('finished');
//   }
// }
//
// console.log(JSON.stringify({foo : 'bar'}));
