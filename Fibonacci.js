var haraqeder = 10; //ozunuz yaza bilersiniz
var fibSeries = [0, 1]; //2 eded melumdur
for (var i = 2; i < haraqeder; i++) {
  fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
}
WScript.Echo("Fibonacci seriyası:");
for (var i = 0; i < haraqeder; i++) {
  WScript.Echo(fibSeries[i]);
}
