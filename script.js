// let lista = [];

// for (exercicio in exercicios){
//     lista.push (`Escreva uma função que ${exercicios[exercicio]}`);

// }

// let exercicios = {
//     exercicio1: "Receba um vetor (lista) de números e procure o número 3 na lista. Se achar retorne true, se não achar reortna false",
    
//     exercicio2: "receba uma palavra e uma letra, e retorna o número de vezes em que essa letra aparece na palavra"

//     exercicio3: "Seja igual à função anterior, mas ignore maiúsculas/minúsculas (not case-sensitve)"
// }-------------------------------------------------------------------

// let lista = [1,5,4,6,3,6,8]

// function buscador (lista){
//     for (numero of lista){
//         if (numero === 3){
//             return true;
//         }
//     }
//     return false
// }
// --------------------------------------------------------------------------

// exer1

// function buscador (lista){
    // for (let numero of lista){
        // if (numero === 3){
            // return true;
        // }
    // }
    // return false
// }
// ---------------------------------------------------------------------------

// exer2

// function buscaLetra(frase, letraBuscada){
//     let contador = 0;
//         for (let letra of frase){
//             if (letra === letraBuscada){
//                 contador++;
//      }
//  }
//     return contador;
// }

// ---------------------------------------------------------------------------

// Exer3

// function buscaLetra(frase, letraBuscada){
//     let contador = 0;
//         for (let letra of frase.toLowerCase()){
//             if (letra === letraBuscada.toLowerCase()){
//                 contador++;
//      }
//  }
//     return contador;
// }

// -------------------------------------------------------------------------------

// // Exer4

// function buscar(entrada){
//     if(typeof(entrada) === "string"){
//        return buscarLetra(entrada, entrada.charAt(0))
            
//   }
//   else if (Array.isArray(entrada)){
//       return buscador(entrada);
//   }
//   return 0;
// }
