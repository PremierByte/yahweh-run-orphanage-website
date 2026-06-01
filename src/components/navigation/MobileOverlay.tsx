import { useSidebarStore } from "@/store/sidebarStore";

export default function MobileOverlay() {
  const { open: sidebarOpen, setOpen: setSidebarOpen } = useSidebarStore();

  return (
    <div
      className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity ${
        sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setSidebarOpen(false)}
    />
  );
}
