export interface Speaker {
    _id:number;
    username:string;
    email:string;
    address:{
        city:string,
        street:string,
        building:string
    }

}