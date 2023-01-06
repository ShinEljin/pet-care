import Form from "../components/Form";

function New() {
  const petForm = {
    name: "",
    owner_name: "",
    species: "",
    age: 0,
    poddy_trained: false,
    diet: "",
    image_url: "",
    likes: "",
    dislikes: "",
  };
  return <Form petForm={petForm} forNewPet={true} />;
}

export default New;
