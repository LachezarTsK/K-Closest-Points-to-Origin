
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    return quickSelect(points, k);
};

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
function quickSelect(points, k) {

    let left = 0;
    let right = points.length - 1;
    let pivotIndex = points.length;

    while (pivotIndex !== k) {
        pivotIndex = partition(points, left, right);
        if (pivotIndex < k) {
            left = pivotIndex;
        } else {
            right = pivotIndex - 1;
        }
    }

    return points.slice(0, k);
}

/**
 * @param {number[][]} points
 * @param {number} left
 * @param {number} right
 * @return number
 */
function partition(points, left, right) {

    let middle = Math.floor(left + (right - left) / 2);
    let pivotDistance = sumSquares(points[middle]);

    while (left < right) {
        if (sumSquares(points[left]) >= pivotDistance) {
            let temp = points[left];
            points[left] = points[right];
            points[right] = temp;
            right--;
        } else {
            left++;
        }
    }
    return (sumSquares(points[left]) < pivotDistance) ? ++left : left;
}

/**
 * @param {number[]} point
 * @return number
 */
function sumSquares(point) {
    return (point[0] * point[0]) + (point[1] * point[1]);
}
