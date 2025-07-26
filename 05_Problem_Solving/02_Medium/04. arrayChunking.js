function chunk(arr, size){
    const chunked = []; // to store the array chunks
    let index = 0; // to keep track of index

    while (index < arr.length) {
        const newChunk = arr.slice(index, index + size);
        chunked.push(newChunk);
        index += size;
    }
    return chunked;
}
console.log(chunk([1, 2, 3, 4, 5, 12, 33, 10], 3));


