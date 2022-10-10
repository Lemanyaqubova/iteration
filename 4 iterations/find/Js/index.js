const arr = [3, 4, 12, 22]

//function find(arr, callback) {
//  for (let i = 0; i < arr.length; i++) {
//    callback(arr[i], i, arr)
//}
//}
arr.find((item, index, array) => {
    if (item[2] === 1) {
        console.log("Delete item[1] with value", item[1]);
    }
    delete item[1];
});