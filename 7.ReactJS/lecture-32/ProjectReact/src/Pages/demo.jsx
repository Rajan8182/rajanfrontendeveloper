#include<iostream>
//#include<conio>
#include<cstring>
#include <iomanip>
using namespace std;
int main()
   {
char str[20];
int i,n;
//clrscr();

cout<<"Enter some String"<<endl;
cin.getline(str,20);

      //n = strlen(str);
      n = 15;
cout<<n<<endl;

for( i = 0 ; i < n ; i++)
         {
       
cout.write(str,i);
cout<<endl;
         }

   
       return 0;
   }

