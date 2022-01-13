const verifyEmptyData = (values) =>{
    let result = {
        result: true
    };
    for (var key in values) {
        if (values.hasOwnProperty(key)) {
            if (!values[key] || values[key] == "") {
                result = {
                    result: false,
                    value: key
                }
                break;
            }
        }
    }
    return result;
}

module.exports = { verifyEmptyData };