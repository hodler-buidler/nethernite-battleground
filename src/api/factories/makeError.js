function makeError(errorDetails) {
  if (typeof errorDetails !== 'object') {
    throw new Error(
      `RequestError body must be an object: ${errorDetails} given`,
    );
  }

  if (!errorDetails.hasOwnProperty('status')) {
    throw new Error(
      `RequestError must contain status property: ${errorDetails.status} given`,
    );
  }

  if (!errorDetails.hasOwnProperty('message')) {
    throw new Error(
      `RequestError must contain message property: ${errorDetails.message} given`,
    );
  }

  return errorDetails;
}

export default makeError;
