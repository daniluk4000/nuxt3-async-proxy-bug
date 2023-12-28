<template>
  <div>
    <h1>Test</h1>
    <nuxt-link to="/">Go to index</nuxt-link>
    <br/>

    First route: {{ firstRoute }}<br/>
    Last route: {{ lastRoute }}
  </div>
</template>

<script setup>
import {callWithNuxt} from '#app';
import {makeAsyncData} from '../asyncdata.ts';

const app = useNuxtApp();
const firstRoute = useState('firstRouter');
const lastRoute = useState('lastRoute');

await useAsyncData(() => callWithNuxt(app, makeAsyncData));
</script>
