export class User {
    _id = "";
    _login = "";
    _name = "";
    _salary = "";
    public constructor(_id: string, _login: string, _name: string, _salary: number) {
    }

    get id() {
        return this._id;
    }

    get login() {
        return this._login;
    }

    get name() {
        return this._name;
    }

    get salary() {
        return this._salary;
    }
}