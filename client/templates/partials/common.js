// Check For Empty Fields
isNotEmpty = function(value) {
    if (value && value !== ''){
        return true;
    }
    FlashMessages.sendError('Please fill all fields',{ autoHide: true, hideDelay: 3000 });
    return false;
};

// Validate Email
isEmail = function(value) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(value)) {
        return true;
    }
    FlashMessages.sendError('Please use a valid email address',{ autoHide: true, hideDelay: 3000 });
    return false;
};