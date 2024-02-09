<template>
  <div class="px-20 py-10">
    <v-form ref="form" class="w-full md:grid grid-cols-12">
      <!-- LOGIN FORM -->
      <div class="col-span-6">
        <div>
          <div class="pb-10">
            <h3 class="font-semibold text-lg text-[#2C4FBE]">ប័ណ្ណសម្គាល់ខ្លួន</h3>
            <div class="w-full h-[1px] bg-[#9D9D9D]" />
          </div>
          <v-select
            v-model="cardType"
            label="ប្រភេទប័ណ្ណ/លិខិត"
            :items="cardTypeData"
            variant="outlined"
            :rules="fieldRule"
          ></v-select>
          <v-text-field
            v-model="cardId"
            variant="outlined"
            :rules="fieldRule"
            label="លេខ"
            required
          ></v-text-field>
        </div>
        <div>
          <div class="py-10">
            <h3 class="font-semibold text-lg text-[#2C4FBE]">លេខទូរស័ព្ទទំនាក់ទំនង</h3>
            <div class="w-full h-[1px] bg-[#9D9D9D]" />
          </div>
          <div class="grid grid-cols-2 gap-5">
            <v-text-field
              variant="outlined"
              v-model="phone1"
              :rules="fieldRule"
              label="លេខទូរស័ព្ទខ្សែទីមួយ"
              required
            ></v-text-field>
            <v-text-field
              variant="outlined"
              v-model="phone2"
              :rules="fieldRule"
              label="លេខទូរស័ព្ទខ្សែទីពីរ"
              required
            ></v-text-field>
          </div>
        </div>
        <div>
          <div class="py-10">
            <h3 class="font-semibold text-lg text-[#2C4FBE]">ទីលំនៅអចិន្រ្តៃយ៍</h3>
            <div class="w-full h-[1px] bg-[#9D9D9D]" />
          </div>
          <div class="grid grid-cols-2 gap-5">
            <v-select
              v-model="city"
              label="ខេត្ត/រាជធានី"
              :items="provincesData"
              variant="outlined"
              :rules="fieldRule"
            ></v-select
            ><v-select
              v-model="province"
              label="ស្រុក/ខណ្ឌ/ក្រុង"
              :items="provincesData"
              variant="outlined"
              :rules="fieldRule"
            ></v-select
            ><v-select
              v-model="district"
              label="ឃុំ/សង្កាត់"
              :items="provincesData"
              variant="outlined"
              :rules="fieldRule"
            ></v-select
            ><v-select
              v-model="village"
              label="ភូមិ"
              :items="provincesData"
              variant="outlined"
              :rules="fieldRule"
            ></v-select
            ><v-text-field
              variant="outlined"
              v-model="street"
              :rules="fieldRule"
              label="ផ្លូវលេខ"
              required
            ></v-text-field
            ><v-text-field
              variant="outlined"
              v-model="house"
              :rules="fieldRule"
              label="ផ្ទះលេខ"
              required
            ></v-text-field>
          </div>
        </div>
        <div>
          <div class="py-10">
            <h3 class="font-semibold text-lg text-[#2C4FBE]">ទីលំនៅបច្ចុប្បន្ន</h3>
            <div class="w-full h-[1px] bg-[#9D9D9D]" />
          </div>
          <div class="grid grid-cols-2 gap-5">
            <v-select
              v-model="currentCity"
              label="ខេត្ត/រាជធានី"
              :items="provincesData"
              variant="outlined"
              :rules="fieldRule"
            ></v-select
            ><v-select
              v-model="currentProvince"
              label="ស្រុក/ខណ្ឌ/ក្រុង"
              :items="provincesData"
              variant="outlined"
              :rules="fieldRule"
            ></v-select
            ><v-select
              v-model="currentDistrict"
              label="ឃុំ/សង្កាត់"
              :items="provincesData"
              variant="outlined"
              :rules="fieldRule"
            ></v-select
            ><v-select
              v-model="currentVillage"
              label="ភូមិ"
              :items="provincesData"
              variant="outlined"
              :rules="fieldRule"
            ></v-select
            ><v-text-field
              variant="outlined"
              v-model="currentStreet"
              :rules="fieldRule"
              label="ផ្លូវលេខ"
              required
            ></v-text-field
            ><v-text-field
              variant="outlined"
              v-model="currentHouse"
              :rules="fieldRule"
              label="ផ្ទះលេខ"
              required
            ></v-text-field>
          </div>
        </div>
        <v-btn color="primary" class="w-full my-5 md:block hidden" @click="validate">
          បន្ទាប់
        </v-btn>
      </div>

      <div class="col-start-8 col-span-5 pt-16">
       
      </div>
      <v-btn
        color="primary"
        class="w-full my-5 md:hidden block text-xl"
        @click="validate"
      >
        ចូលប្រើប្រព័ន្ធ
      </v-btn>
    </v-form>
    <v-dialog v-model="dialog" class="md:w-[30%] w-[90%]">
      <v-card class="p-5 flex items-center justify-center h-[300px]">
        <v-card-text v-if="!succeed" class="flex flex-col items-center gap-5">
          <svg
            width="64"
            height="64"
            viewBox="0 0 84 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="83.5754" height="80" rx="40" fill="#FF3B30" />
            <g clip-path="url(#clip0_179_7317)">
              <path
                d="M39.4424 30.25C44.4909 30.25 48.5835 26.3325 48.5835 21.5C48.5835 16.6675 44.4909 12.75 39.4424 12.75C34.394 12.75 30.3014 16.6675 30.3014 21.5C30.3014 26.3325 34.394 30.25 39.4424 30.25Z"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M48.5835 54.7501H22.9885V52.8527C23.0176 50.1847 23.7526 47.5677 25.1249 45.2456C26.4971 42.9235 28.4618 40.9722 30.8355 39.574C33.2091 38.1757 35.9143 37.3762 38.6983 37.2501C38.9465 37.2388 39.1946 37.2329 39.4424 37.2324C39.6903 37.2329 39.9384 37.2388 40.1866 37.2501C42.5641 37.3578 44.8841 37.9566 46.9893 39.0001"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M70.5219 43.4102L55.0187 58.2502"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M55.0187 43.4102L70.5219 58.2502"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_179_7317">
                <rect
                  width="51.1899"
                  height="49"
                  fill="white"
                  transform="translate(21.1603 11)"
                />
              </clipPath>
            </defs>
          </svg>
          <p class="md:text-2xl text-lg">
            {{ message }}
          </p>
        </v-card-text>
        <v-card-text v-if="succeed" class="flex flex-col items-center gap-5">
          <svg
            width="84"
            height="80"
            viewBox="0 0 84 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="83.5754" height="80" rx="40" fill="#23A26D" />
            <g clip-path="url(#clip0_179_7537)">
              <path
                d="M38.9286 30.8216C44.1556 30.8216 48.3929 26.5843 48.3929 21.3574C48.3929 16.1304 44.1556 11.8931 38.9286 11.8931C33.7016 11.8931 29.4643 16.1304 29.4643 21.3574C29.4643 26.5843 33.7016 30.8216 38.9286 30.8216Z"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M38.9286 57.3212H21.8929V55.269C21.923 52.3831 22.684 49.5525 24.1047 47.0409C25.5255 44.5292 27.5597 42.4186 30.0173 40.9063C32.4749 39.3939 35.2757 38.5291 38.1581 38.3926C38.4151 38.3805 38.672 38.3741 38.9286 38.3735C39.1852 38.3741 39.4421 38.3805 39.6991 38.3926C42.5815 38.5291 45.3823 39.3939 47.8399 40.9063C49.2531 41.7759 50.5263 42.8434 51.6234 44.0712"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M71.1071 40.2856L55.51 61.1071L45.0993 53.3085"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
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
          <v-btn
            v-if="!succeed"
            @click="dialog = false"
            variant="flat"
            color="#F44848"
            class="text-lg md:w-[300px] w-[200px]"
          >
            សូមព្យាយាមម្តងទៀត
          </v-btn>
          <v-btn
            v-if="succeed"
            @click="dialog = false"
            variant="flat"
            color="#23A26D"
            class="text-lg md:w-[300px] w-[200px]"
          >
            យល់ព្រម
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    succeed: false,
    message: "",

    // ព័ត៍មានទូទៅ //
    cardTypeData: [
      "អាវុធប្រើប្រាស់",
      "អាវុធប្រើប្រាស់អង្គភាព",
      "ប័ណ្ណសំគាល់អាវុធខ្លីយកតាមខ្លួន",
    ],
    weaponTypeData: ["អាវុធខ្លី", "អាវុធវែង"],
    weaponModelData: ["CZ RAMI", "CZ YSUA", "CX UWKS"],
    weaponNumberData: [
      "001",
      "002",
      "003",
      "004",
      "005",
      "006",
      "007",
      "008",
      "009",
      "010",
    ],
    originCountryData: [
      "CZECH",
      "USA",
      "CHINA",
      "RUSSIA",
      "GERMANY",
      "FRANCE",
      "ITALY",
      "UK",
      "JAPAN",
      "KOREA",
      "INDIA",
      "CAMBODIA",
    ],
    sexData: ["ប្រុស", "ស្រី"],
    nationalityData: ["ខ្មែរ", "ចិន", "វៀតណាម", "ថៃ"],
    provincesData: [
      "បន្ទាយមានជ័យ",
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
      "ត្បូងឃ្មុំ",
    ],
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
      "អាជ្ញាធរអាងទន្លេសាប",
    ],

    // ព័ត៍មានគណនី //
    cardType: "",
    cardId: "",
    weaponType: "",
    weaponOrigin: "",
    weaponModel: "",
    weaponNumber: "",
    bullets: "",
    originCountry: "",

    // ព័ត៍មានបុគ្គលកាន់កាប់អាវុធ //
    name: "",
    sex: "",
    title: "",
    birthday: "",
    nationality: "",
    position: "",
    ministry: "",
    directorate: "",
    department: "",
    role: "",
    id: "",

    // ព័ត៍មានទីលំនៅអចិន្រ្តៃយ៍ //
    city: "",
    province: "",
    district: "",
    village: "",
    street: "",
    house: "",


    // ព័ត៍មានទីលំនៅបច្ចុប្បន្ន //
    currentCity: "",
    currentProvince: "",
    currentDistrict: "",
    currentVillage: "",
    currentStreet: "",
    currentHouse: "",

    // វិន័យ //
    fieldRule: [(v) => !!v || "សូមបញ្ចូលទិន្នន័យ"],
  }),
};
</script>
