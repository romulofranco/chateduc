import useSupabase from "src/boot/supabase"
import useAuthUser from "./UserAuthUser"

export default function useApi () {

  const supabase = useSupabase()
  const { user } = useAuthUser()

  const list = async () => { }
  const getById = async () => { }
  const post = async () => { }
  const update = async () => { }
  const remove = async () => { }

  return {
    list,
    getById,
    post,
    update,
    remove
  }
}
