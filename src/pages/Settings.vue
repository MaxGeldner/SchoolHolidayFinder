<template>
  <q-page class="q-pa-md">
    <div class="row">
      <h5>Settings</h5>
    </div>
    <div class="row">
      <q-card class="settings-card">
        <q-card-section>
          <div class="text-h6">API Key</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input v-model="apiKey" label="Enter your API Key" />
          <p class="key-info" @click="showDialog = true">How to obtain an API key?</p>
        </q-card-section>
      </q-card>
      <q-card class="settings-card">
        <q-card-section>
          <div class="text-h6">Active Countries</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-option-group
            v-model="selectedCountries"
            :options="options"
            type="checkbox"
          ></q-option-group>
        </q-card-section>
      </q-card>
    </div>
    <div class="row">
      <q-btn color="primary" label="Save Settings" @click="saveSettings"></q-btn>
    </div>

    <q-dialog
      v-model="showDialog"
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
      @hide="showDialog = false"
    >
      <q-card>
        <q-card-section>
          <div class="text-h6">How to obtain an API Key</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
        </q-card-section>

        <q-card-actions align="center" class="bg-white text-teal">
          <q-btn flat label="Close" v-close-popup></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  mounted() {
    console.log(this.$store.state);
  },
  methods: {
    saveSettings() {
      this.$store.commit('setApiKey', this.apiKey);
      this.$store.commit('setSelectedCountries', this.selectedCountries);
      this.createRequestAlert('Saved!');
    },
    createRequestAlert(message, color = 'green') {
      this.$q.notify({
        message,
        color,
      });
    },
  },
  data() {
    return {
      apiKey: this.$store.state.apiKey,
      selectedCountries: this.$store.state.selectedCountries,
      showDialog: false,
      options: [
        {
          label: 'Germany',
          value: 'DE',
        },
        {
          label: 'Austria',
          value: 'AT',
        },
        {
          label: 'Switzerland',
          value: 'CH',
        },
        {
          label: 'Netherlands',
          value: 'NL',
        },
        {
          label: 'France',
          value: 'FR',
        },
        {
          label: 'Belgium',
          value: 'BE',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.settings-card {
    float: left;
    width: 100%;
    margin: 10px 0;
}
.key-info {
  margin: 10px 0 -5px 0;
  color: lightseagreen;
}
</style>
