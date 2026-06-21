type UserID = string;

interface User {
  id: UserID;
  fname: string;
  lname?: string;
  email: string;
  contact: {
    mobile: string;
  };
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
}

class InMemoryDB {
  private _db: Map<UserID, User>;

  constructor() {
    this._db = new Map();
  }

  public insertUser(data: User): UserID {
    if (this._db.has(data.id)) {
      throw new Error("User already exists");
    }
    this._db.set(data.id, data);
    return data.id;
  }

  public updateUser(id: UserID, data: Omit<User, "id">): boolean {
    if (!this._db.has(id)) {
      throw new Error("User does not exists");
    }
    this._db.set(id, { ...data, id });
    return true;
  }

  public getUser(id: UserID): User {
    if (!this._db.has(id)) {
      throw new Error("User does not exists");
    }
    return this._db.get(id)!;
  }
}

const myDB = new InMemoryDB();

myDB.insertUser({
  id: "1",
  fname: "Supriyo",
  lname: "Das",
  email: "supriyasd20@gmail.com",
  contact: {
    mobile: "1234567890",
  },
  address: {
    street: "Daspur",
    city: "Daspur",
    state: "West Bengal",
    zip: "721211",
  },
});

console.log(myDB);
