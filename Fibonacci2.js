var haraqeder = 5; //ozunuz yaza bilersiniz haraqeder

//birinci ve ikinci melumdur zaten

var a1, a2, i;
    a1 = 0;
    a2 = 1;
    i = 0;

//melumdur deye evvelceden ekrana cixardiriq

WScript.Echo(a1);
WScript.Echo(a2);

while(haraqeder >=0)
{
  
    i = a1 + a2;
    a1 = a2;
    a2 = i;
    haraqeder--;
    WScript.Echo(i);
}
