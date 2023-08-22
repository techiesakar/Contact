// defines typescript class name AppError that extends the built-in js class Error
export default class AppError extends Error {
  // status and isOperational are two public class properties
  //   Status - status of code - fail or error
  public status: string;
  //   isOperational - indicate whether the error is operational - related to application logics or not
  public isOperational: boolean;
  //   Constructor of AppError class, that takes two parameters
  constructor(public statusCode: number = 500, message: string) {
    // this lines calls the constructor of the parent class 'Error' with the provided 'message' paremeter
    // this initializes the error message of the 'Error' base class
    super(message);
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;
    // this captures the call stack trace, which is useful for debugging
    Error.captureStackTrace(this, this.constructor);
  }
}
