Template.registerHelper('shortText', function(text, length){
    var newText = text.substring(0, length);
    newText = newText.substr(0, Math.min(newText.length, newText.lastIndexOf(" ")))
    return new Spacebars.SafeString(newText)
});