export interface JwtResponse {
    dataUser: {
        id:any,
        first_name: string,
        last_name: string,
        user_type: string,
        plan:string,
        email: string,
        accessToken: string,
        expiresIn: string
    }
}
