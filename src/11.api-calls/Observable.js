const newPromsise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('dog')
        resolve('cat') // This will not be returned
        resolve('lion')  // This will not be returned
    }, 100)

})

newPromsise.then((output) => {
    console.log('Promise : ' + output)
})

const newObservable$ = new Rx.Observable((observer) =>{
    setTimeout(() => {
        observer.next("dog")
        observer.next("cat")
        observer.next("lion")
    }, 100)
})

const subscription = newObservable$.subscribe((output) => {
    console.log('Observable : ' + output)
})