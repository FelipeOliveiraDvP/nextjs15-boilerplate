interface User {
  name: string;
  age: number;
}

export default function Home() {
  const user: User = {
    name: "Lucas",
    age: 23,
  };

  return <div>{user.name}</div>;
}
