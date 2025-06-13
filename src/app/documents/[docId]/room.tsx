"use client";

import { ReactNode } from "react";
import { useParams } from "next/navigation";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

export function Room({ children }: { children: ReactNode }) {
    const params  = useParams();

  return (
    <LiveblocksProvider publicApiKey={"pk_dev_l12YG7aY_eto7wtSxjoOmxKHggO_jP_c8RTklDKn2ePKB05xH49FPTWPfq3M9m6v"}>
      <RoomProvider id={params.docId as string}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}