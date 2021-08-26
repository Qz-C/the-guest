export interface Account {
    id:        Number,
    createdAt: Date,
    updatedAt: Date,
    email:     String,
    password:  String | undefined,
    role:      String,
    active:    Boolean,
  }