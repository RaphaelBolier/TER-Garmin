<template>
<NavDashboard/>

</template>

<script>
import NavDashboard from './NavDashboard.vue'

export default {
 
  data: () => ({
    drawer: true,
  }),
  components: {
    NavDashboard,
  },
};
</script>
