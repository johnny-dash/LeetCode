public class PalindromeNumber {

    public static void main(String[] args){
        System.out.println(args[0]);
        int x = Integer.parseInt(args[0]);
        boolean result = isPalindrome(x);
        System.out.println(result);
    }

    public static boolean isPalindrome(int x) {
        int result = 0;
        int origin = x; 
        int check = 0;
        int tail = 0;
        while(x !=0){
            check = result;
            result = result *10;
            tail = x % 10;
            result = result + tail;
            
            if(((result- tail) /10 )!= check) {
                return false;
            }
            x = x /10;
            System.out.println(result);
        }

        if ((origin - result) != 0){
            return false;
        } else {
            return true;
        }
        
    }
}