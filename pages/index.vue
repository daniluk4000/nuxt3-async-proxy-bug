<template>
  <div>
    <h1>Index</h1>
    <nuxt-link to="/test">Go to test</nuxt-link>
    <br/>
    First route: {{ firstRoute }}<br/>
    Last route: {{ lastRoute }}
  </div>
</template>

<script setup>
import {makeAsyncData} from '../asyncdata.ts';

const firstRoute = useState('firstRouter');
const lastRoute = useState('lastRoute');

await useAsyncData(() => makeAsyncData());
</script>
