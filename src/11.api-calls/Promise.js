// Catpture the data from database /API
// https://jsonplaceholder.typicode.com/todos
function fetch(){
    return new Promise((resolve, reject) => {
        if(false) {
        setTimeout(function(){
            resolve([
                {
                    "userId": 1,
                    "id": 1,
                    "title": "delectus aut autem",
                    "completed": false
                 },
                 {
                    "userId": 1,
                    "id": 2,
                    "title": "quis ut nam facilis et officia qui",
                    "completed": false
                  }
            ])
        }, 3000)
         } else {
        reject('There is no data')
     }
    })

}




// Wait until data is fetched
fetch()
.then((data) => {
   console.log(data) 
}).catch((error) => {
    console.log(error)
})
// finally get the data and bind it with UI