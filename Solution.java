
import java.util.Arrays;

public class Solution {

    public int[][] kClosest(int[][] points, int k) {
        return quickSelect(points, k);
    }

    public int[][] quickSelect(int[][] points, int k) {

        int left = 0;
        int right = points.length - 1;
        int pivotIndex = points.length;

        while (pivotIndex != k) {
            pivotIndex = partition(points, left, right);
            if (pivotIndex < k) {
                left = pivotIndex;
            } else {
                right = pivotIndex - 1;
            }
        }
        return Arrays.copyOfRange(points, 0, k);
    }

    private int partition(int[][] points, int left, int right) {

        int middle = left + (right - left) / 2;
        int pivotDistance = sumSquares(points[middle]);

        while (left < right) {
            if (sumSquares(points[left]) >= pivotDistance) {
                int[] temp = points[left];
                points[left] = points[right];
                points[right] = temp;
                right--;
            } else {
                left++;
            }
        }
        return (sumSquares(points[left]) < pivotDistance) ? ++left : left;
    }

    public int sumSquares(int[] point) {
        return (point[0] * point[0]) + (point[1] * point[1]);
    }
}
