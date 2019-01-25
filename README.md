# react-native için web formData apisi (kısmen :) )
Bu paketi kendi ihtiyacım için gerekli olan web formdata apisini tam olarak react native de kullanmak için yazdım. Herkes rahatça kullanabilir.
## Basit kullanım
```js
import FormData from "./FormData"

const form = new FormData();

form.set(key,value)  // new FormData() ile oluşturulan nesneye belirtilen key'e value Değerini atar
form.get(key) // new FormData() ile oluşturulan nesnedeki belirtilen değeri döndürür
form.getAll() // new FormData() ile oluşturulan nesnedeki tüm değerleri size döndürür

form.serialize() 
/* 
new FormData() ile oluşturulan nesneyi application/x-www-form-urlencoded
formatında göndermek için çevirir
*/

form.create() 
/* 
oluşturulan nesneyi react native tarafından desteklenen new FormData()'ya 
append methodu ile ekleyerek bu apiyi kullanmanızı sağlar. 
*/

```

### Gözümden kaçan veya önerileriniz varsa issue gönderin beraber daha iyisini yapalım :)
