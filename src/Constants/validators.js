// validate password - Minimum eight characters, at least one letter and one number:
export const validatePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i;
// validate email -
export const validateEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
