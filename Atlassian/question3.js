function z(nums) {
  return nums.map((num) => {
      let n = num;
      let zeros = 0;
      let fours = 0;
      if (num == 0) {
        return -1;
      }

      while (num%10 == 0) {
        zeros++;
        num /= 10;
        num = Math.floor(num);
      }

      let extra_zero = 0;
      while (num % 2 == 0) {
        extra_zero++;
        num /= 2;
        num = Math.floor(num);
      }

      extra_zero = Math.max(0, extra_zero - 2);

      while (num % 5 == 0) {
        extra_zero++;
        num /= 5;
        num = Math.floor(num);
      }

      zeros += extra_zero;

      let f = 1;
      fours++;
      while (f < 10000000000 / Math.pow(10, zeros)) {
        if (f % num == 0) {
          break;
        }
        f *= 10;
        f += 1;
        fours++;
      }

      if (f % num != 0) {
        return -1;
      }

      return {
        num: n,
        z: 2*fours + zeros,
        fours,
        zeros,
        product: f * 4 * Math.pow(10, zeros)
      }
    }
  )
}

console.log(z([4,5,8,10,20,55,57,48,66666,8888, 37, 3, 101, 41, 271, 7, 11, 13]));