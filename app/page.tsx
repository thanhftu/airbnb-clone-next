import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import getListings from "./actions/getListings";
import EmptyState from "./components/EmptyState";
import ClientOnly from "./components/ClientOnly";
import getCurrentUser from "./actions/getCurrentUser";
import Container from "./components/Container";
import ListingCard from "./components/listings/ListingCard";
import { Listing } from "@prisma/client";
import { SafeListing } from "./types";
// import { IlistingsParams } from "./actions/getListings";

const inter = Inter({ subsets: ["latin"] });

// interface HomeProps {
//   searchParams:IlistingsParams
// }

const Home = async () => {
  const listings = await getListings();
  const currentUser = await getCurrentUser();
  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />;
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <Container>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {listings.map((listing: SafeListing) => (
            <ListingCard
              key={listing.id}
              data={listing}
              currentUser={currentUser}
            />
          ))}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
