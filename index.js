const num = [44, 43, 7684, 56, 8, 9, 73, 98, 167, 389, 6378, 6782, 536, 7];

let max = 0;

for (let i = 0; i < num.length; i++) {
     if (num[i] > max)
          max = num[i];

}

document.getElementById("large").innerHTML = "Largest in given array is " + max;



let min = 0;
for (let i = 0; i < num.length; i++) {
     if (num[i] < max)
          min = num[i];

}


document.getElementById("small").innerHTML = "smallest in given array is " + min;





