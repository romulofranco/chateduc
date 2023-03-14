import useSupabase from "src/boot/supabase"
import useAuthUser from "./UserAuthUser"

export default function useApi () {
  const supabase = useSupabase()
  const { user } = useAuthUser()

  return {

  }
}
