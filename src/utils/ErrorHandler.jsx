export const HttpRequestHandler = (request) => {
  switch (request.status) {
    case 500:
      console.error("Something went wrong ! Internal Server Error !");
      break;
  }
};
