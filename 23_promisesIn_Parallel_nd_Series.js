//all the below implementations are of learners bucket and i find them to be too complicated for this
//by default primises are executed in parallel (see promises video of akshay saini)
//for series - just run a loop and use await or then(). this is exactly what is done is below as well


//execute n async tasks in parallel
//by default promises are executed in parallel onlu
function createAsyncTask() {
  const val = Math.floor(Math.random() * 10);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (val < 5) {
        reject(`Error ${val}`);
      } else {
        resolve(val * 1000);
      }
    }, val * 1000);
  });
}

let tasks = [createAsyncTask(), createAsyncTask(), createAsyncTask(), createAsyncTask(), createAsyncTask()];

const asyncParallel = (tasks, callback) => {
  const results = [];
  const errors = [];

  let completed = 0;

  tasks.forEach((task) => {
    task
      .then((val) => {
        results.push(val);
      })
      .catch((err) => {
        errors.push(err);
      })
      .finally(() => {
        completed += 1;
        if (completed >= tasks.length) {
          callback(errors, results);
        }
      })
  })
}

asyncParallel(tasks, (errors, results) => {
  console.log(errors);
  console.log(results);
});

//in series
const asyncSequence = (tasks, callback) => {
  const results = [];
  const errors = [];

  let completed = 0;

  tasks.reduce((acc, curr) => {
    return acc.finally(() => {
      return curr.then((val) => {
        results.push(val);
      }).catch((err) => {
        errors.push(err);
      }).finally(() => {
        completed++;
        if (completed === tasks.length) {
          callback(errors, results);
        }
      })
    });
  }, Promise.resolve());
}
