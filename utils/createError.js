const createError = (code, message) => {
    const error = new Error();
    error.statusCode = code;
    error.message = message;
    return error;
}

export default createError;