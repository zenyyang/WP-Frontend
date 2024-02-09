<template>
    <Header />
    <div class="mt-20">
        <div class="p-10 w-full flex items-center justify-between">
            <p class="text-[#2C4FBE] font-bold text-3xl">បញ្ជូលប័ណ្ណប្រើប្រាស់អាវុធ</p>
            <v-btn color="primary" variant="flat">
                <v-icon class="mr-2">mdi-content-save</v-icon>
                <p class="text-lg">រក្សាទុក</p>
            </v-btn>
        </div>
        <v-tabs v-model="tab" transition="scale-transition" class="pl-10 border-b border-solid border-black">
            <v-tab value="one" :class="{ 'bg-primary': tab === 'one' }" class="text-base">ព័ត៌មានប័ណ្ណអាវុធ</v-tab>
            <v-tab value="two" :class="{ 'bg-primary': tab === 'two' }" class="text-base">ព័ត៌មានទំនាក់ទំនង</v-tab>
            <v-tab value="three" :class="{ 'bg-primary': tab === 'three' }" class="text-base">ឯកសារភ្ជាប់</v-tab>
        </v-tabs>

        <v-card-text>
            <v-window v-model="tab">
                <v-window-item value="one">
                    <WeaponCard />
                </v-window-item>

                <v-window-item value="two">
                    <RelatedInformation />
                </v-window-item>

                <v-window-item value="three">
                    <RequiredInfomation />
                </v-window-item>
            </v-window>
        </v-card-text>
    </div>
</template>

<script>
import Header from '../Header.vue';
import WeaponCard from './WeaponCard.vue';
import RelatedInformation from './RelatedInformation.vue';
import RequiredInfomation from './RequiredInfomation.vue';

export default {
    components: {
        Header,
        WeaponCard,
        RelatedInformation,
        RequiredInfomation
    }, data: () => ({
        tab: null,
    }),

}
</script>
