import { useState } from "react"

export const useUserFetch = () => {
  const [isFetch, setFetch] = useState(false);
  return {
    isFetch, setFetch
  }
}
