<template>
  <q-page class="flex flex-center q-pa-md">
    <div class="row">
      <q-date v-model="date" mask="YYYY-MM-DD"></q-date>
    </div>
    <div class="row">
      <q-btn color="primary" label="Find Holidays" @click="findHolidays"></q-btn>
    </div>
    <q-dialog
      v-model="showDialog"
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
      @hide="resetHolidays"
    >
      <q-card>
        <q-card-section>
          <div class="text-h6">Holidays at {{ this.displayDate }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-list separator>
            <q-item v-for="state in this.holidaysAtDateStates" :key="state">
              {{ state }}<br />
            </q-item>
          </q-list>
        </q-card-section>

        <q-card-actions align="center" class="bg-white text-teal">
          <q-btn flat label="Close" v-close-popup></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
const nodeFetch = require('node-fetch');
const phq = require('predicthq');
const dateFormat = require('dateformat');

export default {
  name: 'PageIndex',
  data() {
    return {
      displayDateMask: 'dd.mm.yyyy',
      date: dateFormat(new Date(), 'yyyy-mm-dd'),
      displayDate: '',
      holidaysAtDate: [],
      holidaysAtDateStates: [],
      showDialog: false,
      stateTranslations: {
        Bavaria: 'Bayern',
        'Baden Wuerttemberg': 'Baden Württemberg',
        Brandenburg: 'Brandenburg',
        Bremen: 'Bremen',
        'North Rhine Westphalia': 'Nordrhein Westfalen',
        Saxony: 'Sachsen',
        Thuringia: 'Thüringen',
        'Lower Saxony': 'Niedersachsen',
        'Saxony Anhalt': 'Sachsen Anhalt',
        Hesse: 'Hessen',
        'Schleswig Holstein': 'Schleswig Holstein',
        'Rhineland Palatinate': 'Rheinland Pfalz',
        Saarland: 'Saarland',
        Berlin: 'Berlin',
        'Mecklenburg West Pomerania': 'Mecklenburg Vorpommern',
        Hamburg: 'Hamburg',
      },
    };
  },
  methods: {
    resetHolidays() {
      this.holidaysAtDate = [];
      this.holidaysAtDateStates = [];
      this.showDialog = false;
    },

    findHolidays() {
      if (!this.$store.state.apiKey) {
        this.createRequestAlert('Please insert an API key in the settings to get holiday informations!');
        return;
      }

      const that = this;
      that.displayDate = dateFormat(that.date, this.displayDateMask);
      const client = new phq.Client({ access_token: that.$store.state.apiKey, fetch: nodeFetch });
      client.events.search({
        category: 'school-holidays', country: that.$store.state.selectedCountries.join(','), 'active.gt': this.date, 'active.lt': this.date, limit: 1000,
      })
        .then((response) => {
          that.holidaysAtDate = response.result.results;
          that.holidaysAtDate.forEach((holiday) => {
            const state = holiday.title.split('-')[0].trim();
            that.holidaysAtDateStates.push(that.stateTranslations[state]
              ? `${that.stateTranslations[state]} | ${holiday.country}`
              : `${state} | ${holiday.country}`);
          });
          that.showDialog = true;
        })
        .catch(
          () => {
            that.createRequestAlert('Error! Are you connected to the internet? Is your API key correct?');
          },
        );
    },

    createRequestAlert(message, color = 'red', icon = 'warning') {
      this.$q.notify({
        message,
        color,
        icon,
      });
    },
  },
};
</script>
