async function o(t) {
  var e, r;
  try {
    return await t();
  } catch (a) {
    const s = a;
    throw (e = s.response) != null && e.data ? {
      status: s.response.data.status,
      message: s.response.data.message
    } : s.status === 500 && !((r = s.response) != null && r.data) ? s.name === "AxiosError" ? {
      status: "Errore",
      message: "Servizi non raggiungibili"
    } : {
      status: "Errore",
      message: "Errore sconosciuto"
    } : {
      status: s.status,
      message: s.message
    };
  }
}
export {
  o as errorHandler
};
//# sourceMappingURL=handlers.mjs.map
