<template>
  <div class="px-20 py-10">
    <v-form ref="form" class="w-full md:grid grid-cols-12">
      <!-- LOGIN FORM -->
      <div class="col-span-6">
        <div>
          <div class="pb-10">
            <h3 class="font-semibold text-lg text-[#2C4FBE]">រូបថតអ្នកស្នើសុំ</h3>
            <div class="w-full h-[1px] bg-[#9D9D9D]" />
          </div>
          <div class="md:pt-0 sm:pt-10">
            <div
              class="rounded-md border-[#ABABAB] border-[1px] border-solid h-72 md:w-52 w-full flex items-center justify-center"
            >
              <v-text v-if="!imageUrl" class="text-2xl text-[#7A7A7A]">រូបភាព</v-text>
              <v-img v-if="imageUrl" :src="imageUrl" contain></v-img>
            </div>
            <input
              ref="fileInput"
              type="file"
              class="d-none"
              accept="image/*"
              @change="onFileChange"
              :rules="fieldRule"
              required
            />
            <v-btn color="primary" @click="pickFile" class="md:w-52 w-full my-5">
              <svg
                width="22"
                height="22"
                viewBox="0 0 26 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.1365 25.9231C24.1365 26.4739 23.9161 27.0022 23.524 27.3917C23.132 27.7811 22.6001 28 22.0456 28H3.22738C2.67283 28 2.14101 27.7811 1.74888 27.3917C1.35677 27.0022 1.13647 26.4739 1.13647 25.9231V3.07692C1.13647 2.52608 1.35677 1.99782 1.74888 1.60832C2.14101 1.21882 2.67283 1 3.22738 1H13.6819L24.1365 11.3846V25.9231Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.1365 12V20"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.13647 16H17.1365"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p class="text-lg ml-2">បញ្ចូលរូបភាព</p>
            </v-btn>
          </div>
        </div>
        <div class="pt-10">
          <div class="pb-10">
            <h3 class="font-semibold text-lg text-[#2C4FBE]">ឯកសារភ្ជាប់</h3>
            <div class="w-full h-[1px] bg-[#9D9D9D]" />
            <v-file-input
              v-model="file"
              label="ឈ្មោះឯកសារ.pdf"
              variant="outlined"
              class="py-10"
            ></v-file-input>
          </div>
        </div>
        <div>
          <div class="pb-10">
            <h3 class="font-semibold text-lg text-[#2C4FBE]">រូបថតអាវុធ</h3>

            <div class="w-full h-[1px] bg-[#9D9D9D]" />
          </div>
          <div class="md:pt-0 sm:pt-10">
            <div
              class="rounded-md border-[#ABABAB] border-[1px] border-solid h-72 md:w-52 w-full flex items-center justify-center"
            >
              <v-text v-if="!imageUrl" class="text-2xl text-[#7A7A7A]">រូបភាព</v-text>
              <v-img v-if="imageUrl" :src="imageUrl" contain></v-img>
            </div>
            <input
              ref="fileInput"
              type="file"
              class="d-none"
              accept="image/*"
              @change="onFileChange"
              :rules="fieldRule"
              required
            />
            <v-btn color="primary" @click="pickFile" class="md:w-52 w-full my-5">
              <svg
                width="22"
                height="22"
                viewBox="0 0 26 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.1365 25.9231C24.1365 26.4739 23.9161 27.0022 23.524 27.3917C23.132 27.7811 22.6001 28 22.0456 28H3.22738C2.67283 28 2.14101 27.7811 1.74888 27.3917C1.35677 27.0022 1.13647 26.4739 1.13647 25.9231V3.07692C1.13647 2.52608 1.35677 1.99782 1.74888 1.60832C2.14101 1.21882 2.67283 1 3.22738 1H13.6819L24.1365 11.3846V25.9231Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.1365 12V20"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.13647 16H17.1365"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p class="text-lg ml-2">បញ្ចូលរូបភាព</p>
            </v-btn>
          </div>
        </div>
        <v-btn color="primary" class="w-full my-5 md:block hidden" @click="validate">
          បន្ទាប់
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    imageUrl: null,
    // file: null,
  }),
  methods: {
    pickFile() {
      this.$refs.fileInput.click();
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.imageUrl = URL.createObjectURL(file);
    },
  },
};
</script>
