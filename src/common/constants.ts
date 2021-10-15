export enum RabbitMQ{
    UserQueue = 'users',
}

export enum UserMSG {
    CREATE = 'CREATE_USER',
    FIND_ALL = 'FIND_USERS',
    FIND_ONE = 'FIND_ONE_USER',
    UPDATE = 'UPDATE_USER',
    DELETE = 'DELETE_USER',
    VALIDATE = 'VALIDATE_USER',
}
