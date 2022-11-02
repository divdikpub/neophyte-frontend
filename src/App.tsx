import { useEffect, useState } from "react";
import Button from "./components/Button";

async function ambilData() {
  const response = await fetch("http://localhost:3000/users");
  const data = await response.json();
  return data;
}

function App(): JSX.Element {
  const [users, setUsers] = useState([]);
  const [isEditOpen, setIsEditOpen] = useState(false);

  useEffect(() => {
    ambilData().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <div className="flex flex-col">
      <header>Neostore</header>
      <nav className="flex gap-2">
        <Button>Beranda</Button>
        <Button>Produk</Button>
        <Button>Tentang</Button>
      </nav>
      <main>
        <Button
          onClick={() => {
            setIsEditOpen(true);
          }}
        >
          Tambah
        </Button>
        <table className="border">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Umur</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {isEditOpen && (
          <div className="bg-black/50 fixed inset-0 flex justify-center items-center">
            <form
              className="flex flex-col w-96 p-8 rounded-3xl bg-white gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                setIsEditOpen(false);
              }}
            >
              <label>
                Nama
                <input type="text" />
              </label>
              <label>
                Email
                <input type="text" />
              </label>
              <label>
                Umur
                <input type="text" />
              </label>
              <Button className="self-end">Simpan</Button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
