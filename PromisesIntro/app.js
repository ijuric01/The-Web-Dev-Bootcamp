// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// const request=fakeRequestPromise("yelp.com/api/coffee/page1")
// request
//     .then(()=>{
//         console.log("promise 1 resolved")
//         console.log("it worked!!!")
//         fakeRequestPromise("yelp.com/api/coffee/page2")
//         .then(()=>{
//             console.log("promise 2 resolved")
           
//             fakeRequestPromise("yelp.com/api/coffee/page3")
//             .then(()=>{
//                 console.log("promise 3 resolved")
            
//             }).catch(()=>{
//                 console.log("promise 3rejected")
//             })
//         })
//         .catch(()=>{
//             console.log("promise 2 not resolved, rejected")
//             console.log("oh no, errror!!!")
//         })
//     })
//     .catch(()=>{
//         console.log("promise not resolved, rejected")
//         console.log("oh no, errror!!!")
//     })

// THE CLEANEST OPTION WITH THEN/CATCH
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!

fakeRequestPromise("yelp.com/page1")
    .then((data)=>{
        console.log("it worked! 1")
        console.log(data)
        return fakeRequestPromise("yelp.com/page2")
    })
    .then((data)=>{
        console.log("it worked 2")
        console.log(data)
        return fakeRequestPromise("yelp.com/page3")
    })
    .then((data)=>{
        console.log("it worked 3")
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)

    })