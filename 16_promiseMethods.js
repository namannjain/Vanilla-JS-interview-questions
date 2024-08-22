//Promise.all
function showText(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  });
}

function myPromiseAll(promises) {
  let ans = [];
  return new Promise((resolve, reject) => {
    promises.forEach((p, ind) => {
      p.then(res => {
        ans.push(res);
        if (ind === promises.length - 1) {
          resolve(ans);
        }
      }).catch((err) => reject(err));
    });
  });
}

function myPromiseAllSettled(promises) {
  let ans = [];
  return new Promise((resolve, reject) => {
    promises.forEach((p, ind) => {
      p.then(res => {
        ans.push(res);
        if (ind === promises.length - 1) {
          resolve(ans);
        }
      }).catch((err) => {
        ans.push(err);
        if (ind === promises.length - 1) {
          resolve(ans);
        }
      });
    });
  });
}

function myPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((p, ind) => {
      p.then(res => {
        resolve(res);
      }).catch((err) => reject(err));
    });
  });
}

function myPromiseAny(promises) {
  let allRejected = [];
  return new Promise((resolve, reject) => {
    promises.forEach((p, ind) => {
      p.then(res => resolve(res)).catch((err) => {
        allRejected.push(err);
        if (ind === promises.length - 1) {
          reject(allRejected);
        }
      });
    });
  });
}

//onFinally is any callback - generally finally() is used to add logs etc
function myPromiseFinally(promise, onFinally) {
  return new Promise((resolve, reject) => {
    promise.then(value => {
      onFinally();
      resolve(value);
    }).catch(error => {
      onFinally();
      reject(error);
    });
  });
}

Promise.all([showText("hello", 1000), Promise.resolve("hi"), Promise.reject("bye")]).then((vals) => console.log(vals));