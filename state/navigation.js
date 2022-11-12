import create from "zustand"
const useNavStore = create((set) => ({
  current: false,
  setCurrent: (stage) => set((state) => ({ current: stage })),
}))
export default useNavStore
