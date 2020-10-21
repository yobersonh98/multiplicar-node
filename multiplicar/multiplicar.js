const fs = require("fs");

let listarTabla = (base, limite = 10) => {
  for (let i = 0; i <= limite; i++) {
    let resultado = base * i;

    console.log(`${base} * ${i} = ${resultado}`);
  }
};

let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor introducido ${base} no es un numero`);
      return;
    }

    let data = "";

    for (let i = 0; i <= limite; i++) {
      let resultado = base * i;

      data += `${base} * ${i} = ${resultado}\n`;
    }

    fs.writeFile(`tablas/tabla-del-${base}-al-${limite}.txt`, data, (err) => {
      if (err) reject(err);
      else resolve(`tabla-del-${base}-al-${limite}.txt`);
    });
  });
};

module.exports = {
  crearArchivo,
  listarTabla,
};
