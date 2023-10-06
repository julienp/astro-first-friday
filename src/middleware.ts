export const onRequest = async (context, next) => {
  console.log("before");
  const response = await next();
  console.log("after");
  return response;
};
