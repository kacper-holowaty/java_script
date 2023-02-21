const array = [2,4,6]

if (array[0] > 0 && array[1] > 0 && array[2] > 0) {
    if ((array[0]+array[1] <= array[2]) || (array[0]+array[2] <= array[1]) || (array[1]+array[2] <= array[0])) {
        console.log("Nie można utworzyć trójkąta.");
    }
    else {
        console.log("Można utworzyć trójkąt.");
    }
}
else {
    console.log("Któraś z liczb jest nieparzysta!");
}