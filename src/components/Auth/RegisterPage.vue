<template >
    <div class="p-10 pb-5 text-[#2C4FBE]">
        <h1 class="font-extrabold text-3xl whitespace-nowrap">
            បង្កើតគណនី
        </h1>
        <div class="bg-[#2C4FBE] h-[1px] w-full my-3" />
    </div>
    <v-form ref="form" class="w-full md:grid grid-cols-12 px-10">
        <!-- LOGIN FORM -->
        <div class="col-span-6">
            <div class="md:flex items-center gap-5">
                <v-text-field variant="outlined" v-model="firstname" :rules="fieldRule" label="គោត្តនាម"
                    required></v-text-field>
                <v-text-field variant="outlined" v-model="lastname" :rules="fieldRule" label="នាម" required></v-text-field>
            </div>
            <v-text-field variant="outlined" v-model="id" :rules="fieldRule" label="អត្តលេខ" required></v-text-field>
            <v-text-field variant="outlined" v-model="username" :rules="fieldRule" label="ឈ្មោះគណនេយ្យ"
                required></v-text-field>
            <v-text-field variant="outlined" v-model="password" :rules="passwordRules" label="លេខសម្ងាត់" type="password"
                required></v-text-field>
            <v-text-field variant="outlined" v-model="phone" :rules="phoneRules" label="លេខទូរស័ព្ទ"
                required></v-text-field>
            <v-text-field variant="outlined" v-model="position" :rules="fieldRule" label="ឋាន:មុខតំណែង"
                required></v-text-field>
            <v-text-field variant="outlined" v-model="role" :rules="fieldRule" label="ឋានន្តរសក្តិ" required></v-text-field>
            <v-select v-model="province" label="ខេត្ត/រាជធានី" :items="provincesData" variant="outlined"
                :rules="fieldRule"></v-select>
            <v-select v-model="ministry" label="ក្រសួង/ស្ថាប័ន" :items="ministriesData" variant="outlined"
                :rules="fieldRule"></v-select>
            <v-select v-model="directorate" label="អគ្គនាយកដ្ឋាន" :items="provincesData" variant="outlined"
                :rules="fieldRule"></v-select>
            <v-select v-model="department" label="អង្គភាព/នាយកដ្ឋាន" :items="provincesData" variant="outlined"
                :rules="fieldRule"></v-select>
            <div
                class="grid lg:grid-cols-4 grid-cols-2 p-5 mb-5 border-[1px] border-solid border-[#ABABAB] rounded-md relative">
                <div class="absolute -top-3 left-3 bg-white px-2 ">
                    <p class="text-[#7A7A7A]">កំណត់សិទ្ធ</p>
                </div>
                <v-checkbox v-model="reportRight" label="របាយការណ៍" class="lg:min-w-[200px] flex items-center"></v-checkbox>
                <v-checkbox v-model="weaponCardInfomationRight" label="ព័ត៌មានប័ណ្ណអាវុធ"
                    class="lg:min-w-[200px] flex items-center"></v-checkbox>
                <v-checkbox v-model="structureRight" label="រចនាសម្ព័ន្ធ"
                    class="lg:min-w-[200px] flex items-center"></v-checkbox>
                <v-checkbox v-model="historyRight" label="ប្រវត្តិកាប្រើប្រាស់"
                    class="lg:min-w-[200px] flex items-center"></v-checkbox>
                <v-checkbox v-model="signatureRight" label="ហត្ថលេខាលើប័ណ្ណ"
                    class="lg:min-w-[200px] flex items-center"></v-checkbox>
                <v-checkbox v-model="weaponeCountryRight" label="ប្រទេសផលិតអាវុធ"
                    class="lg:min-w-[200px] flex items-center"></v-checkbox>
                <v-checkbox v-model="provinceRight" label="ខេត្តក្រុង"
                    class="lg:min-w-[200px] flex items-center"></v-checkbox>
                <v-checkbox v-model="nationalityRight" label="សញ្ជាតិ"
                    class="lg:min-w-[200px] flex items-center"></v-checkbox>
            </div>

            <v-btn color="primary" class="w-full my-5 md:block hidden" @click="validate">
                ចូលប្រើប្រព័ន្ធ
            </v-btn>
        </div>
        <div class="col-start-8 col-span-5">
            <div class="md:pt-0 sm:pt-10">
                <div
                    class="rounded-md border-[#ABABAB] border-[1px] border-solid h-72 md:w-52 w-full flex items-center justify-center">
                    <v-text v-if="!imageUrl" class="text-2xl text-[#7A7A7A]">រូបភាព</v-text>
                    <v-img v-if="imageUrl" :src="imageUrl" contain></v-img>
                </div>
                <input ref="fileInput" type="file" class="d-none" accept="image/*" @change="onFileChange" :rules="fieldRule"
                    required>
                <v-btn color="primary" @click="pickFile" class="md:w-52 w-full my-5">
                    <svg width="22" height="22" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M24.1365 25.9231C24.1365 26.4739 23.9161 27.0022 23.524 27.3917C23.132 27.7811 22.6001 28 22.0456 28H3.22738C2.67283 28 2.14101 27.7811 1.74888 27.3917C1.35677 27.0022 1.13647 26.4739 1.13647 25.9231V3.07692C1.13647 2.52608 1.35677 1.99782 1.74888 1.60832C2.14101 1.21882 2.67283 1 3.22738 1H13.6819L24.1365 11.3846V25.9231Z"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.1365 12V20" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M9.13647 16H17.1365" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                    <p class="text-lg ml-2">បញ្ចូលរូបភាព</p>
                </v-btn>
            </div>
        </div>
        <v-btn color="primary" class="w-full my-5 md:hidden block text-xl" @click="validate">
            ចូលប្រើប្រព័ន្ធ
        </v-btn>
    </v-form>
    <v-dialog v-model="dialog" class="md:w-[30%] w-[90%]">
        <v-card class="p-5 flex items-center justify-center h-[300px]">
            <v-card-text v-if="!succeed" class="flex flex-col items-center gap-5">
                <svg width="64" height="64" viewBox="0 0 84 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="83.5754" height="80" rx="40" fill="#FF3B30" />
                    <g clip-path="url(#clip0_179_7317)">
                        <path
                            d="M39.4424 30.25C44.4909 30.25 48.5835 26.3325 48.5835 21.5C48.5835 16.6675 44.4909 12.75 39.4424 12.75C34.394 12.75 30.3014 16.6675 30.3014 21.5C30.3014 26.3325 34.394 30.25 39.4424 30.25Z"
                            stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M48.5835 54.7501H22.9885V52.8527C23.0176 50.1847 23.7526 47.5677 25.1249 45.2456C26.4971 42.9235 28.4618 40.9722 30.8355 39.574C33.2091 38.1757 35.9143 37.3762 38.6983 37.2501C38.9465 37.2388 39.1946 37.2329 39.4424 37.2324C39.6903 37.2329 39.9384 37.2388 40.1866 37.2501C42.5641 37.3578 44.8841 37.9566 46.9893 39.0001"
                            stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M70.5219 43.4102L55.0187 58.2502" stroke="white" stroke-width="4" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M55.0187 43.4102L70.5219 58.2502" stroke="white" stroke-width="4" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_179_7317">
                            <rect width="51.1899" height="49" fill="white" transform="translate(21.1603 11)" />
                        </clipPath>
                    </defs>
                </svg>
                <p class="md:text-2xl text-lg">
                    {{ message }}
                </p>
            </v-card-text>
            <v-card-text v-if="succeed" class="flex flex-col items-center gap-5">
                <svg width="84" height="80" viewBox="0 0 84 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="83.5754" height="80" rx="40" fill="#23A26D" />
                    <g clip-path="url(#clip0_179_7537)">
                        <path
                            d="M38.9286 30.8216C44.1556 30.8216 48.3929 26.5843 48.3929 21.3574C48.3929 16.1304 44.1556 11.8931 38.9286 11.8931C33.7016 11.8931 29.4643 16.1304 29.4643 21.3574C29.4643 26.5843 33.7016 30.8216 38.9286 30.8216Z"
                            stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M38.9286 57.3212H21.8929V55.269C21.923 52.3831 22.684 49.5525 24.1047 47.0409C25.5255 44.5292 27.5597 42.4186 30.0173 40.9063C32.4749 39.3939 35.2757 38.5291 38.1581 38.3926C38.4151 38.3805 38.672 38.3741 38.9286 38.3735C39.1852 38.3741 39.4421 38.3805 39.6991 38.3926C42.5815 38.5291 45.3823 39.3939 47.8399 40.9063C49.2531 41.7759 50.5263 42.8434 51.6234 44.0712"
                            stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M71.1071 40.2856L55.51 61.1071L45.0993 53.3085" stroke="white" stroke-width="4"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_179_7537">
                            <rect width="53" height="53" fill="white" transform="translate(20 10)" />
                        </clipPath>
                    </defs>
                </svg>

                <p class="text-2xl">
                    {{ message }}
                </p>
            </v-card-text>


            <v-card-actions>
                <v-btn v-if="!succeed" @click="dialog = false" variant="flat" color="#F44848"
                    class="text-lg md:w-[300px] w-[200px]">
                    សូមព្យាយាមម្តងទៀត
                </v-btn>
                <v-btn v-if="succeed" @click="dialog = false" variant="flat" color="#23A26D"
                    class="text-lg md:w-[300px] w-[200px]">
                    យល់ព្រម
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>


export default {
    data: () => ({
        dialog: false,
        succeed: false,
        message: '',

        // ព័ត៍មានទូទៅ // 
        provincesData: ["បន្ទាយមានជ័យ",
            "បាត់ដំបង",
            "កំពង់ចាម",
            "កំពង់ឆ្នាំង",
            "កំពង់ស្ពឺ",
            "កំពង់ធំ",
            "កំពត",
            "កណ្តាល",
            "កែប",
            "កោះកុង",
            "ក្រចេះ",
            "មណ្ឌលគិរី",
            "ឧត្តរមានជ័យ",
            "ប៉ៃលិន",
            "ភ្នំពេញ",
            "ព្រះសីហនុ",
            "ព្រះវិហារ",
            "ព្រៃវែង",
            "ពោធិ៍សាត់",
            "រតនគិរី",
            "សៀមរាប",
            "ស្ទឹងត្រែង",
            "ស្វាយរៀង",
            "តាកែវ",
            "ត្បូងឃ្មុំ"],
        ministriesData: [
            "ព្រឹទ្ធសភា នៃព្រះរាជាណាចក្រកម្ពុជា",
            "រដ្ឋសភា នៃព្រះរាជាណាចក្រកម្ពុជា",
            "ទីស្តីការគណៈរដ្ឋមន្ត្រី",
            "ក្រសួងមហាផ្ទៃ",
            "ក្រុមប្រឹក្សាធម្មនុញ្ញនៃព្រះរាជាណាចក្រកម្ពុជា",
            "ក្រសួងការពារជាតិ",
            "ក្រសួងការបរទេស និងសហប្រតិបត្តិការអន្តរជាតិ",
            "ក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ",
            "ក្រសួងកសិកម្ម រុក្ខាប្រមាញ់ និងនេសាទ",
            "ក្រសួងអភិវឌ្ឍន៍ជនបទ",
            "ក្រសួងពាណិជ្ជកម្ម",
            "ក្រសួងឧស្សាហកម្ម រ៉ែ និងថាមពល",
            "ក្រសួងផែនការ",
            "ក្រសួងអប់រំ យុវជន និងកីឡា",
            "ក្រសួងសង្គមកិច្ច អតីតយុទ្ធជន និងយុវនីតិសម្បទា",
            "ក្រសួងរៀបចំដែនដី នគរូបនីយកម្ម និងសំណង់",
            "ក្រសួងបរិស្ថាន",
            "ក្រសួងធនធានទឹក និងឧតុនិយម",
            "ក្រសួងព័ត៌មាន",
            "ក្រសួងយុត្តិធម៌",
            "ក្រសួងទំនាក់ទំនងជាមួយរដ្ឋសភា ព្រឹទ្ធសភា និងអធិការកិច្ច",
            "ក្រសួងប្រៃសណីយ៍ និងទូរគមនាគមន៍",
            "ក្រសួងសុខាភិបាល",
            "ក្រសួងសាធារណការ និងដឹកជញ្ជូន",
            "ក្រសួងវប្បធម៌ និងវិចិត្រសិល្បៈ",
            "ក្រសួងទេសចរណ៍",
            "ក្រសួងធម្មការ និងសាសនា",
            "ក្រសួងកិច្ចការនារី",
            "ក្រសួងការងារ និងបណ្ដុះបណ្ដាលវិជ្ជាជីវៈ",
            "ក្រសួងមុខងារសាធារណៈ",
            "ក្រសួងឧស្សាហកម្ម វិទ្យាសាស្រ្ត បច្ចេកវិទ្យា និងនវានុវត្តន៏",
            "ធានាគារជាតិ",
            "អង្គភាពប្រឆាំងអំពើពុករលួយ​ (អ.ប.ព.)",
            "អង្គភាព​ព័ត៌មាន និង​ប្រតិកម្ម​រហ័ស",
            "អគ្គស្នងការដ្ឋាននគរបាលជាតិ",
            "អាជ្ញាធរអាងទន្លេសាប"
        ],

        // ព័ត៍មានគណនី //
        province: "",
        firstname: "",
        lastname: "",
        password: "",
        username: "",
        phone: "",
        position: "",
        ministry: "",
        directorate: "",
        department: "",
        role: "",
        id: "",
        imageUrl: null,

        // កំណត់សិទ្ធ //
        reportRight: false,
        weaponCardInfomationRight: false,
        structureRight: false,
        historyRight: false,
        signatureRight: false,
        weaponeCountryRight: false,
        provinceRight: false,
        nationalityRight: false,

        // វិន័យ //
        fieldRule: [
            (v) => !!v || "សូមបញ្ចូលទិន្នន័យ",
        ],
        passwordRules: [
            (v) => !!v || "សូមបញ្ចូលពាក្យសម្ងាត់",
        ],
        phoneRules: [
            (v) => !!v || "សូមបញ្ចូលលេខទូរស័ព្ទ",
            (v) => (v && v.length === 9) || "លេខទូរស័ព្ទមិនត្រឹមត្រូវ",
        ]
    }),
    methods: {
        async validate() {
            const { valid } = await this.$refs.form.validate()

            if (valid) {
                this.message = 'ការបង្កើតគណនីបានជោគជ័យ'
                this.dialog = true
                this.succeed = true
            }
            else {
                this.message = 'ការបង្កើតគណនីបរាជ័យ'
                this.dialog = true
                this.succeed = false
            }

            // Check file input separately
            if (!this.imageUrl) {
                this.message = 'Please upload an image'
                this.dialog = true
                return
            }
        },
        pickFile() {
            this.$refs.fileInput.click();
        },
        onFileChange(e) {
            const file = e.target.files[0];
            this.imageUrl = URL.createObjectURL(file);
        }
    },
};
</script>