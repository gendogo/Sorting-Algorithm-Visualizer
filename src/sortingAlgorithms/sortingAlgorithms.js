export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

function mergeSortHelper(
    originArray,
    l,
    r,
    auxiliaryArray,
    animations,
) {
    if (l === r) return;
    const mid = Math.floor((l + r) / 2);
    mergeSortHelper(auxiliaryArray, l, mid, originArray, animations);
    mergeSortHelper(auxiliaryArray, mid + 1, r, originArray, animations);
    doMerge(originArray, l, mid, r, auxiliaryArray, animations);
}

function doMerge(
    originArray,
    l,
    mid,
    r,
    auxiliaryArray,
    animations,
) {
    let k = l;
    let i = l;
    let j = mid + 1;
    while (i <= mid && j <= r) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([i, j]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            // We overwrite the value at index k in the original array with the
            // value at index i in the auxiliary array.
            animations.push([k, auxiliaryArray[i]]);
            originArray[k++] = auxiliaryArray[i++];
        } else {
            // We overwrite the value at index k in the original array with the
            // value at index j in the auxiliary array.
            animations.push([k, auxiliaryArray[j]]);
            originArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= mid) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxiliaryArray[i]]);
        originArray[k++] = auxiliaryArray[i++];
    }
    while (j <= r) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxiliaryArray[j]]);
        originArray[k++] = auxiliaryArray[j++];
    }
}