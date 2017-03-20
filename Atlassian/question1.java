/*
 * Complete the function below.
 */

public class question1 {

    public static void main(String[] args){
        int[] numbers = {1, 19, 266, 444 , 579, 999};
        String[] res = romanizer(numbers);

        for(int i = 0; i < res.length; i++){
            System.out.println(res[i]);
        }
    }

    static String[] romanizer(int[] numbers) {
        String[] hundreds = {"C", "CC","CCC","CD","D","DC","DCC","DCCC","CM"};
        String[] tens = {"X","XX","XXX","XL","L","LX","LXX","LXXX","XC"};
        String[] digits = {"I","II","III","IV","V","VI","VII","VIII","IX"};
        int len = numbers.length;
        String[] res = new String[len];
        
        for(int i = 0; i<numbers.length; i++){

            String output = "";

            int h = 0;
            int t = 0;
            int s = 0;

            int number = numbers[i];

            if(number == 1000){
                output = "M";
            }
            else{

            // if(number > 100 && number < 1000){ 
            //     h = number / 100 - 1;
            //     t = (number / 10) % 10 - 1;
            //     s = number % 10 - 1; 
            //     output = output + hundreds[h] + tens[t] + digits[s];
            // } 
            // if(number > 10 && number < 100){
            //     t = number / 10 - 1;
            //     s = number % 10 - 1;
            //     output = output + tens[t] + digits[s];
            // } 
            // if(number < 10) {
            //     s = number - 1;
            //     output = digits[s];  
            // }
                s = number % 10 -1;
                t = (number / 10) % 10 -1;
                h = number / 100 -1;
                if(h >= 0){ output = output + hundreds[h];}
                if(t >= 0){ output = output + tens[t]; }
                if(s >= 0){ output = output + digits[s]; }
            }      
            res[i] = output;
        }
        return res;
    }
}

