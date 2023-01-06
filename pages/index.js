import Head from "next/head";
import Card from "../components/Card";
import dbConnect from "../lib/dbConnect";
import Pet from "../models/Pet";

export async function getServerSideProps() {
  await dbConnect();

  const result = await Pet.find().lean();
  const pets = result.map((doc) => {
    doc._id = doc._id.toString();
    return doc;
  });

  return { props: { pets } };
}

function Index({ pets }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="cards-container">
          {pets.map((pet) => (
            <Card key={pet._id} pet={pet} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Index;
