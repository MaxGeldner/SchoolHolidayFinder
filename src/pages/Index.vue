<template>
  <q-page class="flex flex-center q-pa-md">
    <div class="row">
      <q-date v-model="date" mask="YYYY-MM-DD"></q-date>
    </div>
    <div class="row">
      <q-btn color="primary" label="Find Holidays" @click="findHolidays"></q-btn>
    </div>
  </q-page>
</template>

<script>
// const nodeFetch = require('node-fetch');
// const phq = require('predicthq');

export default {
  name: 'PageIndex',
  data() {
    return {
      date: null,
      requestData: null,
    };
  },
  methods: {
    findHolidays() {
      /* eslint-disable */
      const mockData = [
        {
          "relevance": 1,
          "id": "g2s539NWuBuZMXYf3S",
          "title": "Bavaria - Christmas School Holidays",
          "description": "",
          "category": "school-holidays",
          "labels": [
            "holiday",
            "school"
          ],
          "rank": 90,
          "local_rank": null,
          "aviation_rank": 100,
          "phq_attendance": null,
          "entities": [],
          "duration": 1555199,
          "start": "2020-12-23T00:00:00Z",
          "end": "2021-01-09T23:59:59Z",
          "updated": "2020-10-30T10:28:44Z",
          "first_seen": "2017-11-09T22:01:05Z",
          "timezone": null,
          "location": [
            11.49789,
            48.790447
          ],
          "scope": "region",
          "country": "DE",
          "place_hierarchies": [
            [
              "6295630",
              "6255148",
              "2921044",
              "2951839"
            ]
          ],
          "state": "active",
          "brand_safe": true
        },
        {
          "relevance": 1,
          "id": "e7zUKEcyEYcMVn4F79",
          "title": "Saxony - Christmas School Holidays",
          "description": "",
          "category": "school-holidays",
          "labels": [
            "holiday",
            "school"
          ],
          "rank": 90,
          "local_rank": null,
          "aviation_rank": 0,
          "phq_attendance": null,
          "entities": [],
          "duration": 950399,
          "start": "2020-12-23T00:00:00Z",
          "end": "2021-01-02T23:59:59Z",
          "updated": "2020-10-30T12:25:51Z",
          "first_seen": "2017-11-11T10:39:47Z",
          "timezone": null,
          "location": [
            13.201738,
            51.104541
          ],
          "scope": "region",
          "country": "DE",
          "place_hierarchies": [
            [
              "6295630",
              "6255148",
              "2921044",
              "2842566"
            ]
          ],
          "state": "active",
          "brand_safe": true
        },
        {
          "relevance": 1,
          "id": "yXTVVvTSBcTBQpJeYY",
          "title": "North Rhine Westphalia - Christmas School Holidays",
          "description": "",
          "category": "school-holidays",
          "labels": [
            "holiday",
            "school"
          ],
          "rank": 90,
          "local_rank": null,
          "aviation_rank": 100,
          "phq_attendance": null,
          "entities": [],
          "duration": 1295999,
          "start": "2020-12-23T00:00:00Z",
          "end": "2021-01-06T23:59:59Z",
          "updated": "2020-10-30T03:08:43Z",
          "first_seen": "2017-11-11T03:06:56Z",
          "timezone": null,
          "location": [
            7.661594,
            51.433237
          ],
          "scope": "region",
          "country": "DE",
          "place_hierarchies": [
            [
              "6295630",
              "6255148",
              "2921044",
              "2861876"
            ]
          ],
          "state": "active",
          "brand_safe": true
        },
        {
          "relevance": 1,
          "id": "cXMfUgg3Qy7WrTEpRZ",
          "title": "Bremen - Christmas School Holidays",
          "description": "",
          "category": "school-holidays",
          "labels": [
            "holiday",
            "school"
          ],
          "rank": 90,
          "local_rank": null,
          "aviation_rank": 100,
          "phq_attendance": null,
          "entities": [],
          "duration": 1468799,
          "start": "2020-12-23T00:00:00Z",
          "end": "2021-01-08T23:59:59Z",
          "updated": "2020-10-30T05:35:17Z",
          "first_seen": "2017-11-10T18:39:56Z",
          "timezone": null,
          "location": [
            8.801694,
            53.079296
          ],
          "scope": "region",
          "country": "DE",
          "place_hierarchies": [
            [
              "6295630",
              "6255148",
              "2921044",
              "2944387"
            ]
          ],
          "state": "active",
          "brand_safe": true
        },
        {
          "relevance": 1,
          "id": "jjPLKrv8J5e2krJAd7",
          "title": "Thuringia - Christmas School Holidays",
          "description": "",
          "category": "school-holidays",
          "labels": [
            "holiday",
            "school"
          ],
          "rank": 90,
          "local_rank": null,
          "aviation_rank": 0,
          "phq_attendance": null,
          "entities": [],
          "duration": 950399,
          "start": "2020-12-23T00:00:00Z",
          "end": "2021-01-02T23:59:59Z",
          "updated": "2020-10-30T02:38:44Z",
          "first_seen": "2017-11-11T11:09:03Z",
          "timezone": null,
          "location": [
            10.845346,
            51.010989
          ],
          "scope": "region",
          "country": "DE",
          "place_hierarchies": [
            [
              "6295630",
              "6255148",
              "2921044",
              "2822542"
            ]
          ],
          "state": "active",
          "brand_safe": true
        },
        {
          "relevance": 1,
          "id": "noqb3TrhvXru6qVVZ2",
          "title": "Baden Wuerttemberg - Christmas School Holidays",
          "description": "",
          "category": "school-holidays",
          "labels": [
            "holiday",
            "school"
          ],
          "rank": 90,
          "local_rank": null,
          "aviation_rank": 100,
          "phq_attendance": null,
          "entities": [],
          "duration": 1555199,
          "start": "2020-12-23T00:00:00Z",
          "end": "2021-01-09T23:59:59Z",
          "updated": "2020-10-29T21:42:46Z",
          "first_seen": "2018-03-13T00:52:08Z",
          "timezone": null,
          "location": [
            9.350134,
            48.661604
          ],
          "scope": "region",
          "country": "DE",
          "place_hierarchies": [
            [
              "6295630",
              "6255148",
              "2921044",
              "2953481"
            ]
          ],
          "state": "active",
          "brand_safe": true
        },
        {
          "relevance": 1,
          "id": "oBCXgBfGCwi6PkteCR",
          "title": "Lower Saxony - Christmas School Holidays",
          "description": "",
          "category": "school-holidays",
          "labels": [
            "holiday",
            "school"
          ],
          "rank": 90,
          "local_rank": null,
          "aviation_rank": 100,
          "phq_attendance": null,
          "entities": [],
          "duration": 1468799,
          "start": "2020-12-23T00:00:00Z",
          "end": "2021-01-08T23:59:59Z",
          "updated": "2020-10-29T22:08:49Z",
          "first_seen": "2017-11-10T19:18:54Z",
          "timezone": null,
          "location": [
            9.845077,
            52.636704
          ],
          "scope": "region",
          "country": "DE",
          "place_hierarchies": [
            [
              "6295630",
              "6255148",
              "2921044",
              "2862926"
            ]
          ],
          "state": "active",
          "brand_safe": true
        },
        {
          "relevance": 1,
          "id": "iFP3YKmMpNxREh3tsz",
          "title": "Saxony Anhalt - Christmas School Holidays",
          "description": "",
          "category": "school-holidays",
          "labels": [
            "holiday",
            "school"
          ],
          "rank": 90,
          "local_rank": null,
          "aviation_rank": 100,
          "phq_attendance": null,
          "entities": [],
          "duration": 1727999,
          "start": "2020-12-22T00:00:00Z",
          "end": "2021-01-10T23:59:59Z",
          "updated": "2020-10-30T02:20:26Z",
          "first_seen": "2019-01-23T04:36:21Z",
          "timezone": null,
          "location": [
            11.692273,
            51.950265
          ],
          "scope": "region",
          "country": "DE",
          "place_hierarchies": [
            [
              "6295630",
              "6255148",
              "2921044",
              "2842565"
            ]
          ],
          "state": "active",
          "brand_safe": true
        },
        {
          "relevance": 1,
          "id": "nmubUteNnDVfXpGpo7",
          "title": "Hesse - Christmas School Holidays",
          "description": "",
          "category": "school-holidays",
          "labels": [
            "holiday",
            "school"
          ],
          "rank": 90,
          "local_rank": null,
          "aviation_rank": 100,
          "phq_attendance": null,
          "entities": [],
          "duration": 1727999,
          "start": "2020-12-21T00:00:00Z",
          "end": "2021-01-09T23:59:59Z",
          "updated": "2020-10-29T22:22:19Z",
          "first_seen": "2017-11-10T19:01:49Z",
          "timezone": null,
          "location": [
            9.162438,
            50.652052
          ],
          "scope": "region",
          "country": "DE",
          "place_hierarchies": [
            [
              "6295630",
              "6255148",
              "2921044",
              "2905330"
            ]
          ],
          "state": "active",
          "brand_safe": true
        },
        {
          "relevance": 1,
          "id": "9vrkXpZ7hbfBGhhLGG",
          "title": "Brandenburg - Christmas School Holidays",
          "description": "",
          "category": "school-holidays",
          "labels": [
            "holiday",
            "school"
          ],
          "rank": 90,
          "local_rank": null,
          "aviation_rank": 100,
          "phq_attendance": null,
          "entities": [],
          "duration": 1123199,
          "start": "2020-12-21T00:00:00Z",
          "end": "2021-01-02T23:59:59Z",
          "updated": "2020-10-30T12:12:42Z",
          "first_seen": "2017-11-10T18:28:24Z",
          "timezone": null,
          "location": [
            12.531644,
            52.412529
          ],
          "scope": "region",
          "country": "DE",
          "place_hierarchies": [
            [
              "6295630",
              "6255148",
              "2921044",
              "2945356"
            ]
          ],
          "state": "active",
          "brand_safe": true
        }
      ];
      return mockData;
      /*let that = this;
      const client = new phq.Client({access_token: '', fetch: nodeFetch});
      client.events.search({ category: 'school-holidays', country: 'DE', 'active.gt': this.date, 'active.lt': this.date })
      .then((response) => {
        that.requestData = response.result.results;
      })
      .catch(
        err => console.error(err)
      );*/
    },
  },
};
</script>
