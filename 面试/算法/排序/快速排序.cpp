#include<iostream>
#include<vector>
using namespace std;
	
void quickSort(vector<int>&v, int p, int q){
	int i=p,j=q;
	if(i < j){
		int k=v[i];
		while(i < j){
			while(i<j && v[j] > k){
				j--;
			}
			if(i < j) v[i++] = v[j];
			while(i<j && v[i] < k){
				i++;
			}
			if(i < j) v[j--] = v[i];
		}	
		v[i] = k;
		for(int i=0;i<v.size();i++){
			cout << v[i] <<" ";
		}
		cout <<endl;
		quickSort(v, p, i-1);
		quickSort(v, j+1, q);
	}	
}
int main(){
	int a[6] = {5,2,7,1,9,4};
	vector<int> v(a,a+6);
	
	quickSort(v, 0, 5);
	cout << "ÅÅÐòºó" <<endl; 
	for(int i=0;i<v.size();i++){
		cout << v[i] <<" ";
	}
		cout <<endl;
	return 0;
} 