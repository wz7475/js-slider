const validator = (str) => {
    if (str === "")
        return false;
    for (i in str) {
        if (str[i] === "-" && i === "0")  
            continue;
        if (isNaN(parseInt(str[i])))
            return false;
    }
    return true;
}


console.log(validator("-90"));