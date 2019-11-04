#include <iostream>
#include <sstream>
#include <string>
#include <algorithm>
#include <vector>

using namespace std;

int products[60][3];
int arr[32000][60] = {{-1}};
int productTotal;

int maxResult(int current, int money) {
    if(current == 0) {
        return 0;
    }
    if(arr[current][money] != -1) {
        return arr[current][money];
    }
    int productV = products[current][0];
    int productP = products[current][1];
    int productQ = products[current][2];
    int result;
    if (productV > money) {
        result = maxResult(current - 1, money);
    } else {
        // if (productQ != 0) {
        // } else {
        // }
        result = max(productP * productV + maxResult(current - 1, money - productV), maxResult(current-1, money));
    }
    return result;
}

int main(void) {
    int money;
    string rawInput;
    getline(cin, rawInput);
    istringstream iss(rawInput);
    iss >> money;
    iss >> productTotal;

    for(int i = 0; i < productTotal; i++) {
        getline(cin, rawInput);
        istringstream iss(rawInput);
        for(int j = 0; j < 3; j++) {
            string subs;
            iss >> subs;
            // stoi convert string to integer
            products[i][j] = stoi(subs);
        }
    }
    int result = maxResult(productTotal, money);
    cout << result;
}
