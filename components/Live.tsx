import { useMyPresence, useOthers } from "@/liveblocks.config";

import LiveCursors from "./cursor/LiveCursors";
import React, { useCallback } from "react";

const Live = () => {
  const others = useOthers();

  const [{ cursor }, updateMyPresence] = useMyPresence() as any;

  const handlePointerMove = useCallback((event: React.PointerEvent) => {
    event.preventDefault();

    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

    updateMyPresence({ cursor: { x, y } });
  }, []);

  const handlePointerLeave = useCallback((event: React.PointerEvent) => {
    event.preventDefault();

    updateMyPresence({ cursor: null, message: null });
  }, []);

  return (
    <div>
      <LiveCursors others={others} />
    </div>
  );
};

export default Live;
