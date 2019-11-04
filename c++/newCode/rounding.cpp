#include <iostream>
#include <cmath>
using namespace std;

int main(void) {
    double input;
    while(cin >> input) {
        double digit = fmod((input * 10), 10);
        if(digit >= 5) {
            cout << ceil(input) << endl;
        } else {
            cout << floor(input) << endl;
        }
    }
}

// C++ float to int always round down the value
// eg: int(1.8) = 1
// if you want to round to nearest integer should use int(value + 0.5)