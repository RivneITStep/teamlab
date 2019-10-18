class MsgsController {
  Success() {
    return { msg: "Operation completed successfully." };
  }

  Fail() {
    return { msg: "Operation failed." };
  }

  Empty(field) {
    return {
      error: "Validation Error",
      errorMessage: `${field} is empty`
    };
  }

  IncorrectData(data) {
    return {
      error: "Validation Error",
      errorMessage: `${data} is incorrect`
    };
  }

  AlreadyExist(data) {
    return {
      error: "Request Error",
      errorMessage: `${data} already exist.`
    };
  }

  NotFound(data) {
    return {
      error: "Request Error",
      errorMessage: `${data} not found.`
    };
  }

  // NotRegistred(data) {
  //   return {
  //     error: "Request Error",
  //     errorMessage: `That ${data} is not registered.`
  //   };
  // }

  Log(inOrOut) {
    return { msg: `You are logged ${inOrOut}` };
  }

  PlsLogin() {
    return {
      error: "Permission Error",
      errorMessage: "Please login"
    };
  }

  NoRights(...data) {
    let temp = data.join(", ");
    return {
      error: "Permission Error",
      errorMessage: `Access denied. You are not ${temp}.`
    };
  }

  InvalidToken() {
    return {
      error: "Validation Error",
      errorMessage: "Token is not valid"
    };
  }

  ServerError() {
    return {
      error: "Internal Error",
      errorMessage: "Server error. Try latter."
    };
  }

  ValidationErrors(errors) {
    return {
      error: "Validation Error",
      errorMessage: errors
    };
  }
}

module.exports = new MsgsController();