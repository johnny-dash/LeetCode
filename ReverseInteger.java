public class ReverseInteger {
    public static void main(String[] args){
        int x = 1534236469;
        int y  = reverse(x);

        System.out.println(y);
    }


    //positive and negetive number dont need to deal with separately if the condition change to x != 0
    public static int reverse(int x) {
        int result = 0;
        if(x < 2147483647  && x > -2147483647 ){
            if(x > 0){
                while(x > 0){
                    int var = x % 10;
                   
                    x = x / 10;
                    try{
                        result = Math.multiplyExact(result, 10) + var;
                    } catch(ArithmeticException e){
                        return 0;
                    }
                }
                return result;
            }
            else{
                x = Math.abs(x);
                while(x > 0){
                    int var = x % 10;
                    x = x / 10;
                    //result = result * 10 + var;
                    //the number will change when integer overflow
                    try{
                        result = Math.multiplyExact(result, 10) + var;
                    } catch(ArithmeticException e){
                        return 0;
                    }
                }
                return -result;
            }
        }
        else{
            return 0;
        }
    }
}

// Other idea solution
// public int reverse(int x)
// {
//     int result = 0;

//     while (x != 0)
//     {
        // int tail = x % 10;
        // int newResult = result * 10 + tail;
        // if ((newResult - tail) / 10 != result)  //this funciton can check if the integer is overflow
        // { return 0; }
        // result = newResult;
//         x = x / 10;
//     }

//     return result;
// }