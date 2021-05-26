function linearSearch(list, item) {
    for (let element of list) {
        if (element === item) {
            return list.indexOf(element);
        }
    }
}

module.exports = { linearSearch };