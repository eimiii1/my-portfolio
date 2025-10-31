#include <iostream>
#include <cstdlib>

using namespace std;

int main()
{
    int grade;
    cout << "Enter your grade (0-100): ";
    cin >> grade;

    if (grade >= 90 && grade <= 100)
    {
        cout << "Excellent" << endl;
    }
    else if (grade >= 80 && grade <= 89)
    {
        cout << "Very Good" << endl;
    }
    else if (grade >= 70 && grade <= 79)
    {
        cout << "Good" << endl;
    }
    else if (grade >= 60 && grade <= 69)
    {
        cout << "Fair" << endl;
    }
    else if (grade > 60)
    {
        cout << "Poor" << endl;
    }
    return EXIT_SUCCESS;
}