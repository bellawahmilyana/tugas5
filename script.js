const getUser = (id, callback) => {
    setTimeout(() => {
      if (!id) {
        return callback(Error("Invalid ID"))
      }

      let response;
      if (id > 10) {
        response = {
          sucess: false,
          id: id,
          message: "User Not Found!"  
        }
      } else {
        response = {
          sucess: true,
          id: id,
          message: "User Found"
        }
      }
  
      return callback(response);
    }, 2000)
    
  }

  
  const handleOnClick = () => {
    console.log("Clicked...")
    getUser(11, (result) => {
      const dataUser = result
      console.log(dataUser)
    })
  }
  
  // 1. Pelajari Promise.all
  // - https://medium.com/coderupa/panduan-komplit-asynchronous-programming-pada-javascript-part-3-promise-819ce5d8b3c
  // - https://www.youtube.com/watch?v=-Gbb8H3Dy08&t=3s
  // Ubah studi kasus di modul pakai Promise.all
  //
  // 2. Convert ke:
  // - Promise Chaining
  // - Promise.all
  // - Async-await
  // 
  // deadline: jumat, 23 okt 2020, 23:59 wib
  // kirim alamat repo ke fnoviandha@binar.co.id