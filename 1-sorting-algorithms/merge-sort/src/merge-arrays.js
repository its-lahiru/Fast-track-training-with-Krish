export const mergeArrays = function (list_i, list_j) {
    let list = [];
    let index_i = 0;
    let index_j = 0;

    while (index_i < list_i.length && index_j < list_j.length) {
        if (list_i[index_i] < list_j[index_j]) {
            list.push(list_i[index_i]);
            index_i++;
        } else {
            // else if (list_i[index_i] > list_j[index_j])
            list.push(list_j[index_j]);
            index_j++;
        }
    }

    while (index_i < list_i.length) {
        list.push(list_i[index_i]);
        index_i++;
    }

    while (index_j < list_j.length) {
        list.push(list_j[index_j]);
        index_j++;
    }

    return list;
}