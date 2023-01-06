import dbConnect from "../../lib/dbConnect";
import Pet from "../../models/Pet";
import Form from "../../components/Form";

export async function getServerSideProps({ params }) {
  await dbConnect();

  const pet = await Pet.findById(params.id).lean();
  pet._id = pet._id.toString();

  return { props: { pet } };
}

function Edit({ pet }) {
  const petForm = {
    name: pet.name,
    owner_name: pet.owner_name,
    species: pet.species,
    age: pet.age,
    poddy_trained: pet.poddy_trained,
    diet: pet.diet,
    image_url: pet.image_url,
    likes: pet.likes,
    dislikes: pet.dislikes,
  };
  return <Form petForm={petForm} forNewPet={false} />;
}
export default Edit;
