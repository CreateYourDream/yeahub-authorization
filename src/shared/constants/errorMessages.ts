export const ERROR_MESSAGES = {
    "auth.auth.unauthorized": {
        field: "root",
        message: "Не удалсь войти в систему. Попробуйте еще раз.",
        type: "server",
    },
    "auth.user.password.wrong": {
        field: "password",
        message: "Неверный пароль. Попробуйте еще раз.",
        type: "server",
    },
    "auth.user.deleted": {
        field: "root",
        message: "Пользователь заблокирован. Пожалуйста, обратитесь к администратору.",
        type: "server",
    },
    "user.user.id.not_found": {
        field: "root",
        message: "Пользователь не найден.",
        type: "server",
    },
    "auth.user.email.not_exist": {
        field: "username",
        message: "Пользователь с данным email не зарегистрирован.",
        type: "server",
    },
    common: {
        field: "root",
        message: "Произошла ошибка. Пожалуйста, попробуйте позже.",
        type: "server",
    },
}