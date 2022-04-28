# CRONOMETRO
Cronometro que cuenta y descuenta

## INSTALACIÓN

```
npm install cronos-jag
```

## USO

### CONTADOR
```
const modulo = require('cronos-jag');

console.log(modulo.ConvertirSgAFormatoReloj(100,1,1));
console.log(modulo.ConvertirSgAFormatoReloj(600,1,1));
console.log(modulo.ConvertirSgAFormatoReloj(200,1,1));

const cont = new modulo.Contador(3);

var d = cont.start().subscribe(
    data => {
        console.log(data)
        if(data === 'FINISH'){
            d.unsubscribe();
        }
    }

);

// Espera estos resultados
00:00:00
00:00:01
00:00:02
00:00:03
FINISH
```

### DESCONTADOR
```
const modulo = require('./dist');

console.log(modulo.ConvertirSgAFormatoReloj(100,1,1));
console.log(modulo.ConvertirSgAFormatoReloj(600,1,1));
console.log(modulo.ConvertirSgAFormatoReloj(200,1,1));

const cont = new modulo.Contador(2);

const contDes = new modulo.Descontador(2);

var de = contDes.start().subscribe(
    data => {
        console.log('D',data)
        if(data === 'FINISH'){
            de.unsubscribe();
        }
    }

);

// Espera estos resultados
00:00:02
00:00:01
FINISH
```