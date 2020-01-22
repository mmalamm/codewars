// url: https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript

function twoSum(nums, tgt) {
  const dict = {};
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const diff = tgt - curr;
    if (dict.hasOwnProperty(curr)) return [dict[curr], i];
    dict[diff] = i;
  }
}
