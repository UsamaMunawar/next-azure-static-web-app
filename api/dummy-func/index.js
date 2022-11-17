// const blobClient = require('../blobClient');
const blobTesting = require('./blobInstance');

module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');

  const name = req.query.name || (req.body && req.body.name);
  let newArray = [];
  function updateArray(data) {
    newArray.push(data);
  }
  await blobTesting(updateArray);
  // .then((res) => {
  //   console.log({ res });
  //   another = 'I was in done';
  // })
  // .catch((ex) => {
  //   another = ex.message;
  //   console.log(ex.message);
  // });
  const responseMessage = name
    ? 'Hello, ' + name + '. This HTTP triggered function executed successfully.'
    : 'This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.';

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: { responseMessage, newArray: newArray },
  };
};
