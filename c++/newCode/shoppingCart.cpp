#include <iostream>
#include <sstream>
#include <string>
#include <algorithm>
#include <vector>

using namespace std;

int products[60][3];
// int arr[32000][60] = {{-1}};
int productTotal;
vector<int> selected;

int maxResult(int current, int money) {
    if(current == 0) {
        for (std::vector<int>::iterator it = selected.begin() ; it != selected.end(); ++it) {
            cout << *it << " ";
        }
        cout << "end" << endl;
        selected.clear();
        return 0;
    }
    int productV = products[current][0];
    int productP = products[current][1];
    int productQ = products[current][2];
    int result;
    if (productV > money) {
        result = maxResult(current - 1, money);
    } else {
        if (productQ != 0) {
            int notSelectCurrent = maxResult(current - 1, money);

            selected.push_back(current);
            int selectCurrent = productP * productV + maxResult(current - 1, money - productV);

            result = max(notSelectCurrent, selectCurrent);
        } else {
            int notSelectCurrent = maxResult(current - 1, money);
            selected.push_back(current);
            int selectCurrent = productP * productV + maxResult(current - 1, money - productV);
            if(selectCurrent > 6200) {
                for (std::vector<int>::iterator it = selected.begin() ; it != selected.end(); ++it) {
                    cout << *it << " ";
                }
                cout << "end" << endl;
            }
            result = max(notSelectCurrent, selectCurrent);
        }
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
