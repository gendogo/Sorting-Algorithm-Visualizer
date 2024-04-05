export const mergeSort = array => {
    if (array.length === 1) return array;
    const mid = Math.floor(array.length / 2);
    const leftHalf = mergeSort(array.slice(0, mid));
    const rightHalf = mergeSort(array.slice(mid));
    const arrayHelper = [];
    let i = 0, j = 0;
    while (i < leftHalf.length && j < rightHalf.length) {
        if (leftHalf[i] < rightHalf[j]) {
            arrayHelper.push(leftHalf[i++]);
        } else {
            arrayHelper.push(rightHalf[j++]);
        }
    }
    while (i < leftHalf.length) arrayHelper.push(leftHalf[i++]);
    while (j < rightHalf.length) arrayHelper.push(rightHalf[j++]);
    return arrayHelper;
};