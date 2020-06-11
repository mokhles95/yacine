export class User {
    userId :number;
    email: string;
    Password: string;
    Login: string;
    image: File;
    Addresse: string;
    Role: string;
    public User (email:string,Password:string,Login:string,image:File,Addresse:string,Role:string){
        this.email = email;
        this.Password = Password;
        this.Login = Login;
        this.image=image;
        this.Addresse=Addresse;
        this.Role = Role
    }
}