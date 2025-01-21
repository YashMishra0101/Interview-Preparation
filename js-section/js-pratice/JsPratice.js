console.log("JS Practice Room");

//1) Input: `"hello"` → Output: `"olleh"`

// let reverse=(input)=>{
//     return input.split("").reverse().join("")
// }

// console.log(reverse("yash"));

//2)Input: `"madam"` → Output: `true`

// let palindrom=(input)=>{
//     let check=input.split("").reverse().join("");
//     return check===input;
// }

// console.log(palindrom("madam"));

//3)

let arr = [1, 2, 3, 4, 5];

// console.log(arr[arr.length-1]);

// arr.forEach(value=>{
//     console.log(value);
//    })

// let newArray = arr.map(value=>{
//     return value+1;
//    })

//    console.log("old=",arr);
//    console.log("new",newArray);

// let Teaorder=(finalInput)=>{
// console.log(`Order is ${finalInput}`);
// }

// let teaType=(input,callback)=>{
//     callback(input)
// }

// let sugar=()=>{

// }

// item("Pizza",order);

// let one=(callme)=>{
//     setTimeout(()=>{
//        console.log("Hi I am a One");
//        callme()
//     },1000)
// }
// let Two=(callme)=>{
//     setTimeout(()=>{
//         console.log("Hi I am a Two");
//         callme()
//     },1000)
// }
// let Three=(callme)=>{
//     setTimeout(()=>{
//         console.log("Hi I am a Three");
//         callme()
//     },1000)
// }
// let Four=()=>{
//     setTimeout(()=>{
//         console.log("Hi I am a Four");
//     },1000)
// }

// function start(){
//     one(()=>{
//         Two(()=>{
//             Three(()=>{
//                 Four()
//             })
//         })
//     })
// }

// start()

let one= ()=>{
  return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        console.log("Hello Ji One ");
        resolve()
     },1000)
  })
}

let Two= ()=>{
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
          console.log("Hello Ji Two");
          resolve()
       },1000)
    })
}

let Three= ()=>{
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
          console.log("Hello Ji Three");
          resolve()
       },1000)
    })
}

let Four= ()=>{
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
       return reject(new Error ("yyy 4 occurred"));
      // resolve()
         console.log("Hello Ji Four ");
       })
    })
}

let start=()=>{
    one()
    .then(Two)
    .then(Three)
    .then(Four)

    .catch((error)=>{
        console.error("Error Name:", error.message);
    })
    .finally(()=>{
        console.log("Code Ended");
    })
}

start()

// let one= ()=>{
//   return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//         console.log("Hello Ji One ");
//         resolve()
//      },1000)
//   })
// }

// let Two= ()=>{
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//           console.log("Hello Ji Two");
//           resolve()
//        },1000)
//     })
// }

// let Three= ()=>{
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//           console.log("Hello Ji Three");
//           resolve()
//        },1000)
//     })
// }

// let Four= ()=>{
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//        return reject(new Error ("yyy 4 occurred"));
//          console.log("Hello Ji Four ");
//        })
//     })
// }

// let start=async()=>{
//     try{
//        await one();
//        await Two();
//        await Three();
//        await Four();
//     }
//     catch(error){
//         console.log(error.message);
//     }
//     finally{
//         console.log("code ended");
//     }

// }

// start()

// let a = (callback) => {
//   callback();
//   console.log("Process Stop");
// };

// a(() => {
//   console.log("Exceute  immediately");
// });
