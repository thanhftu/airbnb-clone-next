import React from "react";
import getCurrentUser from "../actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import PropertiesClient from "./PropertiesClient";
import getListings from "../actions/getListings";

const page = async () => {
  const currentUser = await getCurrentUser();
  const listings = await getListings();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please Login" />;
  }
  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No Favorite found"
          subtitle="looks like you have no properties yet"
        />
      </ClientOnly>
    );
  }
  console.log(listings);

  return (
    <ClientOnly>
      <PropertiesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default page;
