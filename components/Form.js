import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});

function Form({ petForm, forNewPet }) {
  const router = useRouter();

  const [form, setForm] = useState({
    name: petForm.name,
    owner_name: petForm.owner_name,
    species: petForm.species,
    age: petForm.age,
    poddy_trained: petForm.poddy_trained,
    diet: petForm.diet,
    image_url: petForm.image_url,
    likes: petForm.likes,
    dislikes: petForm.dislikes,
  });

  const handleChange = (e) => {
    const target = e.target;
    const value =
      target.name === "poddy_trained" ? target.checked : target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    forNewPet ? postData() : patchData();
  };

  const postData = async () => {
    try {
      const response = await api.post("/pets", form);

      if (response.status === 201) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const patchData = async () => {
    const { id } = router.query;

    try {
      const response = await api.patch(`/pets/${id}`, form);

      if (response.status === 201) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          maxLength="20"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="owner_name">Owner</label>
        <input
          type="text"
          maxLength="20"
          name="owner_name"
          value={form.owner_name}
          onChange={handleChange}
          required
        />

        <label htmlFor="species">Species</label>
        <input
          type="text"
          maxLength="30"
          name="species"
          value={form.species}
          onChange={handleChange}
          required
        />

        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
        />

        <label htmlFor="poddy_trained">Potty Trained</label>
        <input
          type="checkbox"
          name="poddy_trained"
          checked={form.poddy_trained}
          onChange={handleChange}
        />

        <label htmlFor="diet">Diet</label>
        <textarea
          name="diet"
          maxLength="60"
          value={form.diet}
          onChange={handleChange}
        />

        <label htmlFor="image_url">Image URL</label>
        <input
          type="url"
          name="image_url"
          value={form.image_url}
          onChange={handleChange}
          required
        />

        <label htmlFor="likes">Likes</label>
        <textarea
          name="likes"
          maxLength="60"
          value={form.likes}
          onChange={handleChange}
        />

        <label htmlFor="dislikes">Dislikes</label>
        <textarea
          name="dislikes"
          maxLength="60"
          value={form.dislikes}
          onChange={handleChange}
        />
        <p>message</p>
        <div>error</div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
