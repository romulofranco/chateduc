<template>
    <q-dialog v-model="abreDlgGPT" :maximized="true">
        <DialogGPT :model_dlg_gpt="abreDlgGPT" :question="questionGPT"/>
    </q-dialog>

    <q-card bordered>
        <q-card-section :class="data.header_color" style="padding: 0px 0px 0px 0px">
            <q-item>
                <q-item-section>
                    <q-item-label>
                        <div class="text-h6 text-white">{{ data.title }}</div>
                    </q-item-label>
                    <q-item-label>
                        <q-chip dense :class="data.header_color" text-color="white" icon="star">
                            {{ data.amount }}
                            <q-tooltip class="text-body1 text-black bg-yellow-7 text-wrap" style="max-width: 330px;">
                                {{ data.main_statement }}
                            </q-tooltip>
                        </q-chip>
                    </q-item-label>
                </q-item-section>
            </q-item>
        </q-card-section>
        <q-card-section>
            <q-btn
                    round
                    bordered
                    flat
                    class="absolute" @click="toggleAbreDlgGPT(data.caption)"
                    style="top: 0; right: 12px; transform: translateY(-40%);"
            >
                <q-avatar size="36px" class="q-mb-sm">
                    <img src="https://uploads.laborx.com/avatars/thumb_resized_100x100_4TtosT2qJm9_JHIoAU59OdZ3RxOFL9ZM.png"/>
                </q-avatar>
                <q-tooltip class="bg-yellow-7 text-black text-body1 text-bold" :offset="[10, 10]">
                    Pergunte-me!
                </q-tooltip>
            </q-btn>
        </q-card-section>

        <q-card-section>
            <q-item style="padding: 0px 0px 0px 0px;top: -30px">
                <q-item-section class="text-justify">
                    {{ data.caption }}
                </q-item-section>
            </q-item>
        </q-card-section>

        <q-card-actions class="q-px-md" style="margin-top: -40px" >
            <q-btn flat round color="red"  icon="favorite"/>
            <q-btn flat round color="blue-8" icon="bookmark"/>
            <q-btn flat round color="brown" icon="share" class="text-right"/>
        </q-card-actions>
    </q-card>

</template>

<script>
import {defineComponent, onMounted, ref} from 'vue'
import DialogGPT from "components/DialogGPT.vue";

export default defineComponent({
    name: "CardProduct",
    components: {DialogGPT},
    props: ["data"],
    data: function () {
        const abreDlgGPT = ref(false);
        const questionGPT = ref("");

        onMounted(() => {
            this.ratingVal = this.data.rating;

        });

        function getChat() {

        }

        return {
            abreDlgGPT,
            questionGPT,
            toggleAbreDlgGPT(q) {
                abreDlgGPT.value = !abreDlgGPT.value;
                questionGPT.value = q;
            },
            ratingVal: this.data.rating,
            nivelProgresao: (this.data.rating === 1 ? "A1" : this.data.rating === 2 ? "A2" : this.data.rating === 3 ? "B1" : this.data.rating === 4 ? "B2" : this.data.rating === 5 ? "C1" : "C2"),
            chatEducSentence: "",
            getChat
        }
    },


})
</script>

<style scoped>

</style>
