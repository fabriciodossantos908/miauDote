// export class RemoveMask {
//   trimMaskCell(input) {
//     let regE = /\(([^)]+)\)/;
//     var strValidated = input;
//     var strLength = input.length;
//     let i;

//     for (i = input; strLength >= i.length; i++) {
//       if (i.match(regE)) {
//         strValidated = i.split(regE).join('');
//         if (strValidated.match(' ')) {
//           strValidated = strValidated.split(' ').join('');
//           if (strValidated.match('-')) {
//             strValidated = strValidated.split('-').join('');
//           }
//         }
//       }
//       return strValidated;
//     }
//   }

//   trimMaskCnpj(input) {
//     var strValidated = input;
//     var strLength = input.length;
//     let i;

//     for (i = input; strLength >= i.length; i++) {
//       if (i.match('.')) {
//         strValidated = i.split('.').join('');
//         if (strValidated.match('/')) {
//           strValidated = strValidated.split('/').join('');
//           if (strValidated.match('-')) {
//             strValidated = strValidated.split('-').join('');
//           }
//         }
//       }
//       return strValidated;
//     }
//   }
//   trimMaskCep(input) {
//     var strValidated = input;
//     var strLength = input.length;
//     let i;

//     for (i = input; strLength >= i.length; i++) {
//       if (i.match('-')) {
//         strValidated = i.split('-').join('');
//       }
//       return strValidated;
//     }
//   }

//   trimSlash(input) {
//     var strValidated = input;
//     var strLength = input.length;
//     let i;

//     for (i = input; strLength >= i.length; i++) {
//       if (i.match('_')) {
//         strValidated = i.split('_').join('');
//       }
//       return strValidated;
//     }
//   }

//   repEmptyCpf(input) {
//     var strValidated = input;
//     var strLength = input.length;
//     let i;

//     for (i = input; strLength >= i.length; i++) {
//       if (i.match('_')) {
//         strValidated = i.split('_').join('');
//         if (i.match('.')) {
//           strValidated = i.split('.').join('');
//           if (i.match('-')) {
//             strValidated = i.split('-').join('');
//           }
//         }
//       }
//       return strValidated;
//     }
//   }
// }

export default function RemoveMask(cep) {
  var strValidated = cep;
  var strLength = cep.length;
  let i;

  for (i = cep; strLength >= i.length; i++) {
    if (i.match('-')) {
      strValidated = i.split('-').join('');
    }
    return strValidated;
  }
}
