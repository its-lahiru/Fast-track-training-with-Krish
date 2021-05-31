const linearSearch = function (list, item) {
    // assume item is not found
    let index = -1;
    for (let element of list) {
        if (element === item) {
            index = list.indexOf(element);
            break;
        }
    }
    return index;
}

module.exports = { linearSearch };