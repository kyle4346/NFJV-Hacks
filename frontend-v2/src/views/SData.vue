<template>
  <div id="app">
    <flatfile-button
      :licenseKey="licenseKey"
      :customer="customer"
      :settings="settings"
      :onData="onData">
      Import Contacts
    </flatfile-button>
  </div>
</template>

<script>
import { FlatfileButton } from '@flatfile/vuejs';

export default {
  name: 'App',
  components: {
    FlatfileButton,
  },
  data: () => ({
    licenseKey: 'd0ce60a3-e739-4c4d-8bab-a8df437c7d6a',
    customer: {
      userId: '12345',
    },
    settings: {
      type: 'test import',
      fields: [
        { label: 'name', key: 'Name' },
        { label: 'email', key: 'Email' }
      ]
    },
  }),
  methods: {
    // *optional* shown here for demonstration purposes
    onData: function (results) {
      // Do something with the data here
      console.log(results);
      return "Done!";
    }
  },
}
</script>