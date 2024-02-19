const functionHandler = async (event, context) => {
  try {
    return { env_variables: process.env, event, context };
  } catch (error) {
    console.log(error);
    return { env_variables: process.env, event, context, error };
  }
};

const apiHandler = async (event, context) => {
  try {
    event.body = JSON.parse(event?.body);
    //must return statusCode and stringified body as response
    return {
      statusCode: 200,
      body: JSON.stringify({
        httpMethod: event?.httpMethod,
        body: { env_variables: process.env, event, context },
        message: "Success",
      }),
    };
  } catch (error) {
    console.log(error);
    //must return statusCode and stringified body as response
    return {
      statusCode: 500,
      body: JSON.stringify({
        httpMethod: event?.httpMethod,
        body: { env_variables: process.env, event, context, error },
        message: "Failed",
      }),
    };
  }
};

const apiByIdHandler = async (event, context) => {
  try {
    event.body = JSON.parse(event?.body);
    //must return statusCode and stringified body as response
    return {
      statusCode: 200,
      body: JSON.stringify({
        httpMethod: event?.httpMethod,
        body: { env_variables: process.env, event, context },
        message: "Success",
      }),
    };
  } catch (error) {
    console.log(error);
    //must return statusCode and stringified body as response
    return {
      statusCode: 500,
      body: JSON.stringify({
        httpMethod: event?.httpMethod,
        body: { env_variables: process.env, event, context, error },
        message: "Failed",
      }),
    };
  }
};
module.exports = { functionHandler, apiHandler, apiByIdHandler };
