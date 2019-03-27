const queryObjectToString = (obj) => {
  let res;
  let arr = Object.keys(obj);
  res = arr.reduce((acc, cur, index) => {
      return acc + cur + '=' +  obj[cur] + (index === arr.length - 1? '': '&');
  }, '?');
  return res;
}

const shoes = {
    size:0,
    gender:"male",
    color:"blue" 
}
console.log(queryObjectToString(shoes)); //output： “?size=0&gender=male&color=blue”

const ObjToStr = obj => {
  return Object.keys(obj).reduce((a,b) => a + b + "=" + obj[b] + "&", "?").slice(0, -1)
}