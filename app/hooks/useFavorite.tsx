// import React, { useCallback, useMemo } from "react";
// import { SafeUser } from "../types";
// import { useRouter } from "next/navigation";
// import useLoginModal from "./useLoginModal";

// interface IUseFavorite {
//   listingId: string;
//   currentUser?: SafeUser | null;
// }
// const useFavorite: React.FC<IUseFavorite> = ({ listingId, currentUser }) => {
//   const router = useRouter();
//   const loginModal = useLoginModal();
//   const hasFavorited = useMemo(() => {
//     const list = currentUser?.favoriteIds || [];
//     return list.includes(listingId);
//   }, [currentUser, listingId]);

//   const toggleFavorite = useCallback(
//     async (e: React.MouseEvent<HTMLDivElement>) => {
//       e.stopPropagation();
//       if (!currentUser) {
//         return loginModal.onOpen();
//       }
//     },
//     [currentUser, loginModal]
//   );
//   return {
//     toggleFavorite,
//   };
// };

// export default useFavorite;
