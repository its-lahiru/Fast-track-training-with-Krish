function linearSearch(list, item) {
    let index;
    for (let element of list) {
        // assume item is not found
        index = -1;
        if (element === item) {
            index = list.indexOf(element);
            break;
        }
    }
    return index;
}

module.exports = { linearSearch };