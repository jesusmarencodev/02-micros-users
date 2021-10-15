export interface IUser extends Document {//cuando se usa el schema de mongoose se extiende de Document
    name : string;
    username : string;
    email : string;
    password : string;
}