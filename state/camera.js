import create from "zustand"
import { POSITION_INIT } from "../constants/position"
const useCameraStore = create((set) => ({
  position: POSITION_INIT,
  setPosition: (pos) => set((state) => ({ position: pos })),
}))
export default useCameraStore
