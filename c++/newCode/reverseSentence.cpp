#include <iostream>
#include <sstream>
#include <stack>
using namespace std;

int main(void) {
    string input;
    stack<string> wordStack;
    getline(cin, input);
    istringstream ss(input);
    do {
        // Read a word
        string word;
        ss >> word;

        if(word != "") {
            wordStack.push(word);
        }

    } while (ss);

    while(!wordStack.empty()) {
        if(wordStack.size() > 1) {
            cout << wordStack.top() << " ";
        } else {
            cout << wordStack.top() << endl;
        }
        wordStack.pop();
    }
}