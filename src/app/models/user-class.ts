import { BaseUser } from "../base-user/users-interface";

export class User implements BaseUser {
    gender:string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    location: {
        street: {
            number:string;
            name:string;
        };
        city:string;
        state: string;
        country: string;
        postcode:string;
        coordinates: {
            latitude: string;
            longitude: string;
        };
        timezone: {
            offset:string;
            description:string;
        }
    };
    email:string;
    login: {
        uuid: string;
        username: string;
        password: string;
        salt:string;
        md5: string;
        sha1:string;
        sha256: string;
    };
    dob: {
        date:string;
        age: number;
    };
    registered: {
        date: string;
        age: number;
    };
    phone:string;
    cell:string;
    id: {
        name: string;
        value: null;
    };
    picture: {
        large: string;
        medium:string;
        thumbnail:string;
    };
    nat: string;

    constructor(user: BaseUser) {
        this.name.first = user.name.first;
        this.name.last = user.name.last;
        this.location.country = user.location.country;
        this.picture.thumbnail = user.picture.thumbnail;

      }
}