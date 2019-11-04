#include <iostream>
#include <vector>

using namespace std;

bool word1IsBigger(string word1, string word2) {
    for(unsigned i = 0; i < word1.size(); i ++) {
        if (int(word1[i]) > int(word2[i]) ) {
            return true;
        } else if (word1[i] == word2[i]) {
            return word1IsBigger(word1.substr(1,word1.length() - 1), word2.substr(1, word2.length() -1));
        } else {
            return false;
        }
    }
    return false;
};

int main(void) {
    string pairNumber;
    while(getline(cin, pairNumber)) {
        vector<string> sortedList;
        for(int i = 0; i < stoi(pairNumber); i++) {
            string word;
            getline(cin, word);
            sortedList.push_back(word);
            // if (sortedList.size() == 0) {
            //     sortedList.push_back(word);
            // } else {
            //     for (unsigned i = 0; i < sortedList.size(); i++) {
            //         // cout << word1IsBigger(sortedList[i], word) << "-----" << sortedList[i] << "----" << word << endl;
            //         if (word1IsBigger(sortedList[i], word)) {
            //             sortedList.insert(sortedList.begin() + i, word);
            //             break;
            //         } else if (i == sortedList.size() - 1) {
            //             sortedList.push_back(word);
            //             break;
            //         }
            //     }
            // }
        }
        sort(sortedList.begin(), sortedList.end());
        for (unsigned i = 0; i < sortedList.size(); i++) {
            cout << sortedList[i] << endl;
        }
    }
    return 0;
}

