export const handler = async (event) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify('This is a custom messagem deploy for github actions'),
    };
    return response;
  };
  