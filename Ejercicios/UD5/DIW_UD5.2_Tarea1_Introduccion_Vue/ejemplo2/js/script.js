const arr = [1, 3, 5, 3, 7];
const value = 3;
 
const result = arr.filter(function(x) {
    return x !== value;
});
 
console.log(result);