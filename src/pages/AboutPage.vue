<template>
    <q-page>

        <div id="id_testimonial" class="quote">
            <div style="background-color: #000000ad !important">
                <q-carousel
                        v-model="review_slide"
                        swipeable
                        animated
                        infinite
                        autoplay
                        arrows
                        navigation
                        padding
                        navigation-position="bottom"
                        class="text-white full-height bg-transparent q-mx-xl"
                >
                    <q-carousel-slide style="padding-bottom: 140px" name="style" class="column no-wrap flex-center">
                        <img :style="'margin-top:100px;border-radius:5px;border: 1px solid ' + theme_color"
                             src="/statics/images/team_1.jpg" width=150 height=150>
                        <div class="q-mt-md text-h6 text-center">
                            <span class="text-primary">Rômulo Franco</span><br><span class="text-overline">Doutorando e Desenvolvedor da ChatEduc</span>
                        </div>
                        <div class="q-mt-md text-h6 text-center">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut<br>
                            labore et dolore magna aliqua.
                        </div>
                    </q-carousel-slide>
                    <q-carousel-slide style="padding-bottom: 140px" name="tv" class="column no-wrap flex-center">
                        <img :style="'margin-top:100px;border-radius:5px;border: 4px solid ' + theme_color"
                             src="/statics/images/team_2.jpg" width="150" height="150">
                        <div class="q-mt-md text-h6 text-center">
                            <span :style="'color:'+theme_color">Rômulo Franco</span><br><span class="text-overline">Lead Developer</span>
                        </div>
                        <div class="q-mt-md text-h6 text-center">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut<br>
                            labore et dolore magna aliqua.
                        </div>
                    </q-carousel-slide>
                    <q-carousel-slide style="padding-bottom: 140px" name="layers" class="column no-wrap flex-center">
                        <img :style="'margin-top:100px;border-radius:5px;border: 4px solid ' + theme_color"
                             src="/statics/images/team_3.jpg" width=150 height=150>
                        <div class="q-mt-md text-h6 text-center">
                            <span :style="'color:'+theme_color">John Doe</span><br><span
                                class="text-overline">Product Owner</span>
                        </div>
                        <div class="q-mt-md text-h6 text-center">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut<br>
                            labore et dolore magna aliqua.
                        </div>
                    </q-carousel-slide>
                </q-carousel>
            </div>
        </div>

    </q-page>
</template>

<script>
import {defineComponent, ref} from "vue";
import userAuthUser from "../composables/UserAuthUser";

export default defineComponent({
    name: "AboutPage",
    setup() {
        const {user} = userAuthUser();
        return {
            stars: ref(4),
            review_slide: 'style',
            team_slide: 1,
            hover: false,
            active: false,
            theme_color: 'rgb(245,94,12)',
            background_style: 'background-color:rgba(0, 163, 82, 0.7);',
            user,
        };
    },
});
</script>
<style>

.animation_1 {
    -webkit-animation: bounceIn 1s ease-in 800ms both;
    animation: bounceIn 1s ease-in 800ms both
}

.animation_2 {
    -webkit-animation: flipInX 2s ease-in-out 800ms both;
    animation: flipInX 1s ease-in-out 800ms both;
}

.animation_3 {
    -webkit-animation: lightSpeedIn;
    animation: lightSpeedIn 1s ease-in 800ms both
}

.quote {
    background-size: cover;
    background: url(/statics/images/parallax.jpg) repeat fixed center;
}

.box-shadow:hover {
    box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 20px 31px 3px rgba(0, 0, 0, 0.14), 0 8px 38px 7px rgba(0, 0, 0, 0.12) !important;
}

</style>
