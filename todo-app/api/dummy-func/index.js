module.exports = async function (context, req, _) {
  console.log({ context, req, _ });
  context.res = {
    status: 200,
    body: 'This is an achievement',
  };
};
