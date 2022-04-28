const modulo = require('./dist');

console.log(modulo.ConvertirSgAFormatoReloj(100,1,1));
console.log(modulo.ConvertirSgAFormatoReloj(600,1,1));
console.log(modulo.ConvertirSgAFormatoReloj(200,1,1));

const cont = new modulo.Contador(2);

var d = cont.start().subscribe(
    data => {
        console.log(data)
        if(data === 'FINISH'){
            d.unsubscribe();
        }
    }

);

const contDes = new modulo.Descontador(2);

var de = contDes.start().subscribe(
    data => {
        console.log('D',data)
        if(data === 'FINISH'){
            de.unsubscribe();
        }
    }

);