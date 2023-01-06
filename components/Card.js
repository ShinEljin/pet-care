import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});

function Card({ pet, edit }) {
  const router = useRouter();

  async function handleDelete() {
    const { id } = router.query;
    try {
      const response = await api.delete(`/pets/${id}`);

      if (response.status === 200) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="card">
      <img src={pet.image_url} alt="pet-image" />
      <h5 className="pet-name">{pet.name}</h5>
      <div className="main-content">
        <p className="pet-name">{pet.name}</p>
        <p className="owner">Owner: {pet.owner_name} </p>

        {/* Extra Pet Info: Likes and Dislikes */}
        <div className="likes info">
          <p className="label">Likes</p>
          <p>{pet.likes}</p>
        </div>
        <div className="dislikes info">
          <p className="label">Dislikes</p>
          <p>{pet.dislikes}</p>
        </div>

        <div className="btn-container">
          <Link href="/[id]/edit" as={`/${pet._id}/edit`}>
            <button className="btn edit">Edit</button>
          </Link>
          {edit ? (
            <button className="btn view" onClick={handleDelete}>
              Delete
            </button>
          ) : (
            <Link href="/[id]" as={`/${pet._id}`}>
              <button className="btn view">View</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
