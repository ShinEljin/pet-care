import dbConnect from "../../lib/dbConnect";
import Pet from "../../models/Pet";
import Card from "../../components/Card";

export async function getServerSideProps({ params }) {
  await dbConnect();

  const pet = await Pet.findById(params.id).lean();
  pet._id = pet._id.toString();

  return { props: { pet } };
}

function Index({ pet }) {
  return (
    <div className="view-container">
      <Card pet={pet} edit={true} />
    </div>
  );
}

export default Index;
