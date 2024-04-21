fetch(`mongodb://localhost:27017`)
  .then((res) => {
    console.log(res);
  })
  .then((err) => {
    console.log(err);
  });
console.log("ds");
