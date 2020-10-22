

const getUser = () => {
    id = document.querySelector("#exampleFormControlSelect1").value
    id = Number(id)
    const response = new Promise((resolve, reject)=>{
        setTimeout(() => {
            if (!id){
                console.log(Error("invalid ID"))
            } else if (id<10){
                resolve ({
                    sucess: true,
                    id: id,
                    message: "User Found"
                })
            }else{
                reject({
                sucess: false,
                id: id,
                message: "User Not Found!"
                })
            }
            
        }, 2000);
    })
    return response
}

// menggunakan metode chain promise
// const handleOnClick = () =>{
//     console.log("clicked..")
//     const foo = getUser()
//     foo   
//         .then (hasil => {
//             document.getElementById("hasilType").innerHTML = hasil.sucess
//             document.getElementById("hasilID").innerHTML = hasil.id
//             document.getElementById("hasilMessage").innerHTML = hasil.message
//             console.log(hasil)
//         })
//         .catch (error => {
//             document.getElementById("hasilType").innerHTML = error.sucess
//             document.getElementById("hasilID").innerHTML = error.id
//             document.getElementById("hasilMessage").innerHTML = error.message
//         })
// }




// menggunakan async-await
// const handleOnClick = async() =>{
//         console.log("clicked..")
//         const hasil = await getUser().catch(err=>err)
//         document.getElementById("hasilType").innerHTML = hasil.sucess
//         document.getElementById("hasilID").innerHTML = hasil.id
//         document.getElementById("hasilMessage").innerHTML = hasil.message
//         console.log(hasil)
// }



// menggunakan Promise.all
// const handleOnClick = () =>{
//     console.log("clicked..")
//     Promise.all([getUser()])
//     .then(hasil => {
//         document.getElementById("hasilType").innerHTML = hasil.sucess
//         document.getElementById("hasilID").innerHTML = hasil.id
//         document.getElementById("hasilMessage").innerHTML = hasil.message
//         console.log(hasil)
//     })
//     .catch(error=> {
//         document.getElementById("hasilType").innerHTML = error.sucess
//         document.getElementById("hasilID").innerHTML = error.id
//         document.getElementById("hasilMessage").innerHTML = error.message
//     })
// }

// handleOnClick()