<script setup>
import Counter from '../components/Counter.vue';
import ColorChecker from '../components/ColorChecker.vue';
import HelloWorld from '../components/HelloWorld.vue';
import { reactive, computed, watchEffect } from 'vue';

const r = reactive({
    felkialtojelDarab: 3,
    nev: 'Jedlik Ányos',
    xek: '',
    felkialtojelek: '!!!',
    napok: ['hétfő', 'kedd', 'szerda'],
    inputNap: '',
});

setInterval(() => {
    let wrongCharPos = -1;
    for (let i = 0; i < r.xek.length; i++) {
        if (r.xek[i].toLowerCase() !== 'x') {
            wrongCharPos = i;
            break;
        }
    }
    if (wrongCharPos !== -1) {
        if (r.xek.length <= 10) {
            r.xek = r.xek.replace(r.xek[wrongCharPos], 'X');
        } else {
            r.xek = r.xek.replace(r.xek[wrongCharPos], '');
        }
    } else {
        if (r.xek.length < 10) {
            r.xek += 'X';
        } else if (r.xek.length > 10) {
            r.xek = r.xek.slice(0, -1);
        }
    }
}, 3000);

const iNap = computed(() => r.inputNap.toLowerCase());

watchEffect(() => (r.felkialtojelek = '!'.repeat(r.felkialtojelDarab)));

function onClick(művelet) {
    if (művelet === '+') {
        r.felkialtojelDarab++;
    } else if (művelet === '-') {
        r.felkialtojelDarab--;
    }
}

function napEllenorzese() {
    const joNapok = ['', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat', 'vasárnap'];
    return joNapok.includes(iNap.value);
}

function joNapHozzadni(nap) {
    return iNap.value !== '' && napEllenorzese() && !r.napok.includes(nap);
}

function hozzadNap() {
    r.napok.push(iNap.value);
    r.inputNap = '';
}

function joNapTorolni(nap) {
    return r.napok.includes(nap);
}

function torolNap() {
    r.napok = r.napok.filter((i) => i !== iNap.value);
    r.inputNap = '';
}
</script>

<template>
    <v-container fluid>
        <hello-world msg="Hello World!" />

        <counter />

        <color-checker class="mt-3" />

        <v-container class="ma-3">
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field
                        v-model="r.nev"
                        :rules="[(v) => v.length <= 20 || 'Max 20 karakter!']"
                        counter="20"
                        hint="Maximum 20 karakter engedélyezett"
                        label="Kérem a neved!"
                    ></v-text-field>
                    <v-text-field
                        v-model="r.xek"
                        :rules="[(v) => v.length <= 10 || 'Irgum-burgum max 10 darab X!']"
                        counter="10"
                        hint="Maximum 10 darab x engedélyezett"
                        label="10 darab x"
                    ></v-text-field>
                    <v-alert icon="mdi-import" class="ma-3" color="green" dense elevation="9" 
                        >Hello {{ r.nev }} {{ r.xek }} {{ r.felkialtojelek }}</v-alert
                    >
                    <v-alert icon="mdi-alert-box-outline" class="ma-3" color="yellow" dense elevation="9"
                        >Felkiáltójelek darabszáma: {{ r.felkialtojelDarab }}</v-alert
                    >
                    <v-row justify="center" class="ma-5">
                        <v-btn
                            class="mx-3"
                            color="primary"
                            :disabled="r.felkialtojelDarab == 10"
                            elevation="5"
                            @click="onClick('+')"
                            >Plus</v-btn
                        >
                        <v-btn
                            class="mx-3"
                            color="error"
                            :disabled="r.felkialtojelDarab == 1"
                            elevation="5"
                            @click="onClick('-')"
                            >Minus</v-btn
                        >
                    </v-row>
                </v-col>

                <v-col cols="12" md="6">
                    <v-alert class="ma-3"  color="orange" dense shaped elevation="9">
                        <ol class="pa-3">
                            <li v-for="nap in r.napok" :key="nap">{{ nap }}</li>
                        </ol>
                    </v-alert>
                    <v-text-field
                        v-model="r.inputNap"
                        class="mb-1"
                        :rules="[napEllenorzese() || 'Ügyelj a helyesírásra!']"
                        hint="Adjad meg egy nap nevét!"
                        label="Kérem a nap nevét!"
                    ></v-text-field>

                    <v-row justify="center">
                        <v-btn
                            class="ma-3"
                            color="primary"
                            :disabled="!joNapHozzadni(iNap)"
                            elevation="5"
                            @click="hozzadNap()"
                            >Nap hozzáadása</v-btn
                        >
                        <v-btn
                            class="ma-3"
                            color="primary"
                            :disabled="!joNapTorolni(iNap)"
                            elevation="5"
                            @click="torolNap()"
                            >Nap törlése</v-btn
                        >
                    </v-row>
                </v-col>
            </v-row>
        </v-container>

        <v-btn block flat color="info" class="mt-3" to="/about"> Go To About Us </v-btn>
    </v-container>
</template>
