function generateFibonacci() {
    let fibonacci = [0, 1]; 
    for (let i = 2; i < 100; i++) {
      
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci; 
}
const fibonacciSeries = generateFibonacci();
document.write("<b>Fibonacci Series Upto 100th Value:</b><br>");
document.write(fibonacciSeries.join(", "));