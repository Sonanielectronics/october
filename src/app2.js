async function removeElementFromArray(array, element) {
    const index = array.indexOf(element);
    if (index > -1) { 
        array.splice(index, 1); 
    }
    return array;
}

        const newArray = await removeElementFromArray(array1, 2);