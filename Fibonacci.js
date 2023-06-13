var terms = 10;
var fibSeries = [0, 1];
for (var i = 2; i < terms; i++) {
  fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
}
WScript.Echo("Fibonacci series:");
for (var i = 0; i < terms; i++) {
  WScript.Echo(fibSeries[i]);
}