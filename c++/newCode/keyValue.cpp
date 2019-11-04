#include <iostream>
#include <vector>
#include <sstream>
#include <map>
using namespace std;

int main(void) {
    string pairNumber;
    map<int, int> map;
    getline(cin, pairNumber);
    for(int i = 0;i < stoi(pairNumber);i++) {
        string pairString;
        vector<int> pair;
        getline(cin, pairString);
        istringstream iss(pairString);
        for(string s; iss >> s;) {
            pair.push_back(stoi(s));
        }
        int key = pair[0];
        int value = pair[1];
        map[key] = map[key] + value;
    }


    for (int i = 0; i < map.size(); i++) {
        if(map[i] != 0) {
            cout << i << " " << map[i] << endl;
        }
    }
}