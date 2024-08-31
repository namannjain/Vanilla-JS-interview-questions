//custom request and response interceptor
const originalFetch = window.fetch;

window.fetch = async function(...args){
  const updatedRequest = requestInterceptor(args);
  const res = await originalFetch(...updatedRequest);
  const updatedRes = responseInterceptor(res);
  return updatedRes;
}

window.requestInterceptor = (args) => {
  console.log("Im a request interceptor");
  return args;
}

window.responseInterceptor = (res) => {
  console.log("response interceptor");
  return res.json();
}
