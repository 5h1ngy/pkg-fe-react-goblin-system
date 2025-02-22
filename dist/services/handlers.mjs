async function errorHandler(cb) {
  var _a, _b;
  try {
    return await cb();
  } catch (error) {
    const exeception = error;
    if ((_a = exeception.response) == null ? void 0 : _a.data) {
      throw {
        status: exeception.response.data.status,
        message: exeception.response.data.message
      };
    } else if (exeception.status === 500 && !((_b = exeception.response) == null ? void 0 : _b.data)) {
      if (exeception.name === "AxiosError") {
        throw {
          status: "Errore",
          message: "Servizi non raggiungibili"
        };
      } else {
        throw {
          status: "Errore",
          message: "Errore sconosciuto"
        };
      }
    } else {
      throw {
        status: exeception.status,
        message: exeception.message
      };
    }
  }
}
export {
  errorHandler
};
