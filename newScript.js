
const getUser = (id) => {
    const response = new Promise((resolve, reject)=>{
        setTimeout(() => {
            if (typeof(id) !== "number"){
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
//     const foo = getUser(8)
//     foo   
//         .then (hasil => console.log(hasil))
//         .catch (error => console.log(error))
// }




// menggunakan async-await
const handleOnClick = async() =>{
        console.log("clicked..")
        const hasil = await getUser(11).catch(error => error)
        console.log(hasil)
}



// menggunakan Promise.all
// const handleOnClick = () =>{
//     console.log("clicked..")
//     const hasil = Promise.all(getUser(8))
//     hasil.then(console.log(hasil))
// }

handleOnClick()