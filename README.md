## Ongoing . :floppy_disk:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

> likey among worse names for an app.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


### Code Blocker

- placed while loop inside a Promise
- but it doesn't solve the problem with the while loop
- actual creation of the promise and while loop still happens on the main thread;

```
const codeBlocker = () => {
  return new Promise((resolve,reject) => {
     let i = 0;
     while(i < 100000000) {i++;}
     resolve('billion loops done');
  }
  
```

#### To ensure all synchronous code runs as fast as possible, refactor code like this:
 
- Running while loop inside of Promise.resolve
- Placing code inside of ***Promise resolve*** guarantees that it will be executed after
  all the synchronous code in the current macro task has completed

  ```
      return Promise.resolve().then(v => {
        let i=0;
        while(i < 1000000000 ) {i++;}
        return 'billion loops done';
      })
      
  ```
  
  
  ### Async function
  
  - Whatever get returned inside ***getFruits*** will be a Promise of that value.


```
  const getFruits = async(name) => {
    const food = {
      milk: 5,
      oranges: 9,
      grapes: 3,
      bananas: 7
    };
    return food[name];
  }

  getFruits('milk').then(console.log)

```


- To get all of the values at the same time, we pause the execution of this function until the getFruits promise 
  returns a value; at which point we can use as the variable a.
- Call await only once

```
  const makeSmoothie = async(name) => {
    const a = getFood('milk');
    const b = getFood('oranges');
    const c = getFood('grapes');
    const d = getFood('bananas');
    const smoothie = await Promise.all([a,b,c,d]);

    return smoothie;

  }

```
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  



