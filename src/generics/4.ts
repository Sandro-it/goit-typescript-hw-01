type UserType = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<UserType>) {}

const newUser = createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
