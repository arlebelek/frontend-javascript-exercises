module.exports.formLetter = function(firstName, senderName, message) {
    var assemblement="Hello "+ firstName+",\n\n"+message+"\n\nSincerely,\n"+senderName;
    return assemblement;
    
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
    var assemblement=bigString.substring(startA,endA);
    assemblement+=bigString.substring(startB,endB);
    return assemblement;
    
};

module.exports.findFirstMatch = function(text, searchString) {
    var assemblement=text.search(searchString);
    return assemblement;
    
};

module.exports.findLastMatch = function(text, searchString) {
    var assemblement=text.lastIndexOf(searchString);
    return assemblement;
    
};

module.exports.substringBetweenMatches = function(text, searchString) {
    var firstSearchString=text.indexOf(searchString);
    var lastSearchString=text.lastIndexOf(searchString);
    var assemblement=text.substring(firstSearchString,lastSearchString).replace(searchString,"");
    return assemblement;
};


