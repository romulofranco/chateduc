import useSupabase from "src/boot/supabase";
import useAuthUser from "./UserAuthUser";

export default function useApi() {
  const { supabase } = useSupabase();
  const { user } = useAuthUser();

  const list = async (table) => {
    const { data, error } = await supabase.from(table).select("*");
    if (error) throw error;
    return data;
  };

  const getById = async (table, id) => {
    const { data, error } = await supabase.from(table).select("*").eq("id", id);
    if (error) throw error;
    return data[0];
  };

  const post = async (table, form) => {
    try {
      const { data, error } = await supabase
        .from(table)
        .insert([{ ...form, user_id: user.value.id }]);

      if (error) {
        alert(error.message);
        console.error("There was an error inserting", error);
        return null;
      }

      console.log("created a new checkin");
      return data;
    } catch (err) {
      alert("Error");
      console.error("Unknown problem inserting to db", err);
      return null;
    }
  };

  const postCheckin = async (table, form, checkinArea) => {
    try {
      const { data, error } = await supabase
        .from(table)
        .insert([{ ...form, user_id: user.value.id }]).single();

      checkinArea.forEach((check) => {
        check.checkin_id = data.id;
        check.user_id = user.value.id;
      });

      let { d, e } = await supabase
        .from("checkin_areas")
        .insert(checkinArea);

      if (e) {
        alert(e.message);
        return null;
      }

      if (error) {
        alert(error.message);
        console.error("There was an error inserting", error);
        return null;
      }

      console.log("created a new checkin");
      return data.id;
    } catch (err) {
      alert("Error");
      console.error("Unknown problem inserting to db", err);
      return null;
    }
  };

  const update = async (table, form) => {
    const { data, error } = await supabase
      .from(table)
      .update([{ ...form }])
      .match({ id: form.id });
    if (error) throw error;
    return data;
  };

  const remove = async (table, id) => {
    const { data, error } = await supabase.from(table).delete().match({ id });
    if (error) throw error;
    return data;
  };

  return {
    list,
    getById,
    post,
    postCheckin,
    update,
    remove
  };
}
