import create from "zustand"
const useStageStore = create((set) => ({
  current: 0,
  setCurrent: (stage) => set((state) => ({ current: stage })),
}))
export default useStageStore
