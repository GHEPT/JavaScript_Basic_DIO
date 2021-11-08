/* ATIVIDADE 1
 Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

1. Crie uma função getAdmins que recebe um Map;
2. Crie um Map e popule-o com nomes de usuários e seus papeis no sistema (Ex: 'Luiz => 'Admin');
3. Dentro de getAdmins, utilize o loop for;;;of para retornar uma lista com os nomes dos usuários que são administradores. 

ATIVIDADE 2
Dado o array [30, 30, 49, 5, 223, 2049, 3034, 5] retorne outro array com valores únicos.
*/

/* Resolução 1 

function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key)
        }
    }
    return admins; 
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natália', 'Admin');

console.log(getAdmins(usuarios));
*/

/* Resolução 2 */

const myArray = [30, 30, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet]; // argumento Rest.
}

console.log(valoresUnicos(myArray));