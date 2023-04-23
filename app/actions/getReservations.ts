import React from "react";
import prisma from "@/app/libs/prismadb";
import { SafeListing } from "../types";

interface IParams {
  listingId?: string;
  userId?: string;
  authorId?: string;
}
export default async function getReservations(params: IParams) {
  try {
    const { listingId, userId, authorId } = params;

    const query: any = {};
    if (listingId) {
      query.listingId = listingId;
    }
    if (userId) {
      query.userId = userId;
    }
    if (authorId) {
      query.listing = { userId: authorId };
    }

    const reservations = await prisma.reservation.findMany({
      where: query,
      include: {
        listing: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    const listings = await prisma.listing.findMany({
      //   where: query,
      orderBy: {
        createdAt: "desc",
      },
    });
    const safeReservations = reservations.map((reservation) => ({
      ...reservation,
      createdAt: reservation.createdAt.toISOString(),
      startDate: reservation.startDate.toDateString(),
      endDate: reservation.endDate.toDateString(),
      listing: {
        ...reservation.listing,
        createdAt: reservation.listing.createdAt.toISOString(),
      },
    }));
    // console.log("query", query);
    // return sageListings;
    return safeReservations;
  } catch (error: any) {
    throw new Error(error);
  }
}
