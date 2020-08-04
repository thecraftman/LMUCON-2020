<template>
    <div>
        <navbar-component />
        <event-component />
    </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent'
import EventComponent from '@/components/EventComponent'
export default {
  name: 'Schedule',
  components: { NavbarComponent, EventComponent },
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>
