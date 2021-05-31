function palindromeDateChecker(dateObject) {
    let day = dateObject.getDate();
    let month = dateObject.getMonth();
    let year = dateObject.getFullYear().toString().substring(2, 5);
    let date = `${day}-${month}-${year}`;
    let reversedDate = `${year}-${month}-${day}`;
    if (date === reversedDate)
        return true;
    else
        return false;
}

export default { palindromeDateChecker };