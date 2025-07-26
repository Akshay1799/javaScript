function destroyer (arr, ...valueToDestroy){
    // The rest operator contains all the different types of arguments
    return arr.filter((val)=> !valueToDestroy.includes(val));
    
}

console.log(destroyer(["tree", "hamburger", 53], "tree", 53))