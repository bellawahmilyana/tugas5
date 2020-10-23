const getFirstName = (firstName) => {
    return new Promise((resolve, reject) => {
        firstName = document.querySelector("#firstName").value 
        setTimeout(() => {
            return (true) ?
                resolve(firstName) : reject(Error(`gagal ${firstName}`))
        }, 3000);
    });
};


const getLastName = (lastName) => {
    return new Promise((resolve, reject) => {
        lastName = document.querySelector("#lastName").value
        setTimeout(() => {
            return (true) ?
                resolve(lastName) : reject(Error(`gagal ${lastName}`))
        }, 3000)
    })
}



// 1.1 PROMISE ALL

const handleOnClick1 = () => {
    console.log("clicked...")
    Promise.all([getFirstName(), getLastName()])
        .then(response => {
            console.log(response)
            resultFirstName = response[0]
            resultLastName = response[1]
            resultFullName = `${resultFirstName} ${resultLastName}`
            document.querySelector("#fullName").innerHTML = resultFullName
        })
        .catch(error => {
            console.log(error)
            document.querySelector("#fullName").innerHTML = error
        })
}









const getUser = (id) => {
    id = document.querySelector("#exampleFormControlSelect1").value
    id = Number(id)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!id) {
                reject(Error(`ID cannot equal to ${id}!`));
            }
            let response;
            if (id > 10) {
                response = {
                    success: false,
                    id: id,
                    message: "User Not Found!",
                };
            } else {
                response = {
                    success: true,
                    id: id,
                    message: "User Found",
                };
            }
            resolve(response);
        }, 2000);
    });
};





// 2.1 Async AWAIT

const handleOnClick = async () => {
    console.log("Clicked...");
    try {
        const dataUser = await getUser();
        document.getElementById("hasilType").innerHTML = dataUser.success
        document.getElementById("hasilID").innerHTML = dataUser.id
        document.getElementById("hasilMessage").innerHTML = dataUser.message
        console.log(dataUser);
    } catch (err) {
        console.log(err);
    }
};



// // 2.2 Promise ALL

// const handleOnClick = () => {
//     console.log("Clicked...");
//     Promise.all([getUser()])
//         .then((response) => {
//         const dataUser = response[0];
//         document.getElementById("hasilType").innerHTML = dataUser.success
//         document.getElementById("hasilID").innerHTML = dataUser.id
//         document.getElementById("hasilMessage").innerHTML = dataUser.message
//         console.log(dataUser);
//         })
//         .catch((err) => {
//         console.log(err);
//         });
// };



// // 2.3 PROMISE CHAINING

// const handleOnClick = () => {
//     console.log("Clicked...");
//     getUser()
//         .then((result) => {
//         const dataUser = result;
//         console.log(dataUser);
//         })
//         .catch((err) => {
//         console.log(err);
//         });
//     };