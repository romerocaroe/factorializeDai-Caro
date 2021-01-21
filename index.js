const factorialize = function(num){
    return num < 2 ? num : num * factorialize(num - 1) 
}

module.exports = factorialize
