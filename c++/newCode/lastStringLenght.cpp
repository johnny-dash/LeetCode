#include <iostream>
#include <string.h>
#include <vector>
#include <sstream>
using namespace std;

int main(){
    string input;
    getline (cin, input);
    vector<string> result;
    istringstream iss(input);
    for(string s; iss >> s;) {
        result.push_back(s);
    }

    string lastWord = result.back();
    cout << lastWord.size();
}
