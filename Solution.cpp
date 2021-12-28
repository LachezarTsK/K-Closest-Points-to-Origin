
#include<vector>
using namespace std;

class Solution {
    
public:

    vector<vector<int>> kClosest(vector<vector<int>>&points, int k) {
        return quickSelect(points, k);
    }

    vector<vector<int>> quickSelect(vector<vector<int>>&points, int k) {

        int left = 0;
        int right = points.size() - 1;
        int pivotIndex = points.size();

        while (pivotIndex != k) {
            pivotIndex = partition(points, left, right);
            if (pivotIndex < k) {
                left = pivotIndex;
            } else {
                right = pivotIndex - 1;
            }
        }
        return vector<vector<int>>(points.begin(), points.begin() + k);

    }

    int partition(vector<vector<int>>&points, int left, int right) {

        int middle = left + (right - left) / 2;
        int pivotDistance = sumSquares(points[middle]);

        while (left < right) {
            if (sumSquares(points[left]) >= pivotDistance) {
                points[left].swap(points[right]);
                right--;
            } else {
                left++;
            }
        }
        return (sumSquares(points[left]) < pivotDistance) ? ++left : left;

    }

    int sumSquares(vector<int>& point) {
        return (point[0] * point[0]) + (point[1] * point[1]);
    }
};
