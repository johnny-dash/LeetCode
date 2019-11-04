#include <iostream>

using namespace std;

int Partition(int *a, int start, int end) {
    int pivot = a[end];
    int P_index = start;
    int i, t;

    for(i=start;i<end;i++) {
    	if(a[i]<=pivot) {
            t=a[i];
            a[i]=a[P_index];
            a[P_index]=t;
            P_index++;
        }
    }
    t=a[end];
    a[end]=a[P_index];
    a[P_index]=t;

    //at last returning the pivot value index
    return P_index;
}

void QuickSort(int *a, int start, int end) {
    if (start< end) {
        int P_index = Partition(a, start, end);
        QuickSort(a, start, P_index-1);
        QuickSort(a, P_index+1, end);
    }
}

int main(){
    int n;
    cout<<"Enter number of elements: ";
    cin>>n;
    int a[n];
    cout<<"Enter the array elements:\n";
    for(int i=0;i<n;i++)
    {
        cin>>a[i];
    }
    QuickSort(a,0,n-1);
    cout<<"After Quick Sort the array is:\n";
    for(int i=0;i<n;i++)
    {
        cout<<a[i]<<" ";
    }
    return 0;
}

