#include <iostream>
#include <vector>
using namespace std;

bool isPrime(int input) {
    for(int i = 2; i < input; i++) {
        if(input % i == 0) {
            return false;
        }
    }
    return true;
}

string getResult(long ulDataInput) {
    vector<int> results;
    string output;
    int prime = 2;
    while(prime <= ulDataInput) {
        if(isPrime(prime)) {
            if(ulDataInput % prime == 0) {
                ulDataInput = ulDataInput / prime;
                results.push_back(prime);
            } else {
                prime++;
            }
        } else {
            prime++;
        }
    }
    for(vector<int>::iterator it = results.begin(); it != results.end(); ++it) {
        output = output + to_string(*it) + ' ';
    }
    return output;
}

int main(void) {
    long input;
    while(cin >> input) {
        string output = getResult(input);
        cout << output << endl;
    }
}