import { useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onOpenChange = () => setIsOpen((prev) => !prev);

  return { isOpen, onOpen, onOpenChange };
};
