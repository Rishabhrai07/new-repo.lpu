function CountingEvenOdd(arr, arr_size)
{
    let even_count = 0;
    let odd_count = 0;
 
    // loop to read all the values in the array
    for (let i = 0; i < arr_size; i++) {
         
        // checking if a number is completely
        // divisible by 2
        if (arr[i]%2 == 0)
            even_count++;
        else
            odd_count++;
    }
 
    console.log("Number of even elements = " + even_count
        + "<br>" + "Number of odd elements = " + odd_count);
}
 
    let arr = [ 2, 3, 4, 5, 6 ];
    let n = arr.length;
     
    // Function Call
    CountingEvenOdd(arr, n);
 
