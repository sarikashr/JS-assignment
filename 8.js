let cubeOfNumbers=0;

for(let i=1; i<=100; i++){
    cubeOfNumbers += Math.pow(i,3);
    if(i!==100){
        cubeOfNumbers += ", ";
    }
}

document.write("<b>The cubes of all natural numbers up to 100 count are: </b></br>" + cubeOfNumbers+".");