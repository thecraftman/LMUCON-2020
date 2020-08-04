<template>
  <div class="speakers">
      <navbar-component />
    <speakers-component />
    </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent'
import SpeakersComponent from '@/components/SpeakerComponent'
export default {
  components: { NavbarComponent, SpeakersComponent }
}
</script>
