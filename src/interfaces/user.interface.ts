export interface User {
    nombre:string;
    apellido:string;
    nacimiento:string;
    correo:string;
    contrasena:string;
}

export interface UserModel{
    id:number;
    name:string;
    lastName:string;
    dateBirth:string;
    email:string;
    password:string;
    roles:[{
        id: number,
        name:string
    }];
}

export interface registerResponse{
    message:string;
}