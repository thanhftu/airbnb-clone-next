import React from "react";
import prisma from "@/app/libs/prismadb";
import { SafeListing } from "../types";

// export interface IlistingsParams {
//   userId?: string;
//   guestCount?: number;
//   roomCount?: number;
//   bathroomCount?: number;
//   startDate?: string;
//   endDate?: string;
//   locationValue?: string;
//   category?: string;
// }
export default async function getListings() {
  try {
    // const {
    //   userId,
    //   roomCount,
    //   guestCount,
    //   bathroomCount,
    //   locationValue,
    //   startDate,
    //   endDate,
    //   category,
    // } = params;

    // let query: any = {};
    // if (userId) {
    //   query.userId = userId;
    // }
    // if (category) {
    //   query.category = category;
    // }
    // if (roomCount) {
    //   query.roomCount = roomCount;
    // }
    // if (guestCount) {
    //   query.guestCount = guestCount;
    // }
    // if (bathroomCount) {
    //   query.bathroomCount = bathroomCount;
    // }
    // if (locationValue) {
    //   query.locationValue = locationValue;
    // }
    // if (startDate && endDate) {
    //   query.NOT = {
    //     some: {
    //       OR: [
    //         {
    //           endDate: { gte: endDate },
    //           startDate: { lte: startDate },
    //         },
    //         {
    //           startDate: { lte: endDate },
    //           endDate: { gte: endDate },
    //         },
    //       ],
    //     },
    //   };
    // }
    const listings = await prisma.listing.findMany({
      //   where: query,
      orderBy: {
        createdAt: "desc",
      },
    });
    const sageListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));
    // console.log("query", query);
    // return sageListings;
    return sageListings;
  } catch (error: any) {
    throw new Error(error);
  }
}
