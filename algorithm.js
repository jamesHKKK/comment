/*
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 给定 nums = [2, 7, 11, 15], target = 9
 因为 nums[0] + nums[1] = 2 + 7 = 9
 所以返回 [0, 1]
 */
function test(num, target) {
    var arr = []
    for (i = 0; i < num.length - 1; i++) {
        for (j = i + 1; j < num.length; j++) {
            if (num[i] + num[j] == target) {
                arr.push(i)
                arr.push(j)
                return arr;
            }

        }
    }
}

/*
旋转图像 给定一个 n × n 的二维矩阵表示一个图像。 将图像顺时针旋转 90 度。
你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵，请不要使用另一个矩阵来旋转图像
*/