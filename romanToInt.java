public class romanToInt{
	public static void main(String[] args){
		String test = "MCMXCVI";
		int result = romanToInt(test);
		System.out.println(result);
	}	

    public static int romanToInt(String s) {
	    int result = 0;
	    for(int i =0; i< s.length();i++){
	        if(s.charAt(i) == 'M'){
	            result = result + 1000;
	        }
	        if(s.charAt(i) == 'D'){
	            result = result + 500;
	        }
	        if(s.charAt(i) == 'C'){
	            if(i < s.length()-1 && (s.charAt(i+1) == 'D' || s.charAt(i+1) == 'M')){
	                result = result - 100;
	            }
	            else{
	                result = result + 100;
	            }
	        }
	        if(s.charAt(i) == 'L'){
	            result = result + 50;
	        }
	        if(s.charAt(i) == 'X'){
	            if(i < s.length()-1 && (s.charAt(i+1) == 'L' || s.charAt(i+1) == 'C')){
	                result = result - 10;
	            }
	            else{
	                result = result + 10;
	            }
	        }
	        if(s.charAt(i) == 'V'){
	            result = result + 5;
	        }
	        if(s.charAt(i) == 'I'){
	            if(i < s.length()-1 && (s.charAt(i+1) == 'V' || s.charAt(i+1) == 'X')){
	                result = result - 1;
	            }
	            else{
	                result = result + 1;
	            }
	        }
	    }
	    return result;
	}


// excellent solution from discusion board
// translate the roman number (string) to int array
// if the next number is bigger then minus the number otherwise add the number


//  public int romanToInt(String s) {
//     int nums[]=new int[s.length()];
//     for(int i=0;i<s.length();i++){
//         switch (s.charAt(i)){
//             case 'M':
//                 nums[i]=1000;
//                 break;
//             case 'D':
//                 nums[i]=500;
//                 break;
//             case 'C':
//                 nums[i]=100;
//                 break;
//             case 'L':
//                 nums[i]=50;
//                 break;
//             case 'X' :
//                 nums[i]=10;
//                 break;
//             case 'V':
//                 nums[i]=5;
//                 break;
//             case 'I':
//                 nums[i]=1;
//                 break;
//         }
//     }
//     int sum=0;
//     for(int i=0;i<nums.length-1;i++){
//         if(nums[i]<nums[i+1])
//             sum-=nums[i];
//         else
//             sum+=nums[i];
//     }
//     return sum+nums[nums.length-1];
// }

}