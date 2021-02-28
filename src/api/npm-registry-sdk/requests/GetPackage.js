function Request({ http, Response, RequestError }) {
  /**
   * @param {string} package Required. package-name to get info on
   */
  return async function request({ packageName = '' } = {}) {
    try {
      const response = await http(true).get(`/${packageName}`, {
        params: {},
      });
      return Response.make(response);
    } catch (error) {
      throw RequestError.default(error);
    }
  };
}

export default Request;
