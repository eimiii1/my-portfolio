#include <iostream>
#include <cstdlib>

using namespace std;

int main()
{
    int day;
    cout << "Enter day number (1-7): ";
    cin >> day;

    if (day == 1)
    {
        cout << "The day is Sunday" << endl;
    }
    else if (day == 2)
    {
        cout << "The day is Monday" << endl;
    }
    else if (day == 3)
    {
        cout << "The day is Tuesday" << endl;
    }
    else if (day == 4)
    {
        cout << "The day is Wednesday" << endl;
    }
    else if (day == 5)
    {
        cout << "The day is Thursday" << endl;
    }
    else if (day == 6)
    {
        cout << "The day is Friday" << endl;
    }
    else if (day == 7)
    {
        cout << "The day is Saturday" << endl;
    } else {
        cout << "Invalid day number" << endl;
    }

    return EXIT_SUCCESS;
}