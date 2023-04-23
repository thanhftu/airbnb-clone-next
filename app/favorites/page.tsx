import React from "react";
import getCurrentUser from "../actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import getFavorites from "../actions/getFavorites";
import FavoritesClient from "./FavoritesClient";

const page = async () => {
  const currentUser = await getCurrentUser();
  const listings = await getFavorites();
  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No Favorite found"
          subtitle="looks like you havent favorites yet"
        />
      </ClientOnly>
    );
  }
  console.log(listings);

  return (
    <ClientOnly>
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default page;
