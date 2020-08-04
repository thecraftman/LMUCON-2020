<template>
      <!-- Header Area-->
    <header class="header-area header2">
        <div class="container">
            <div class="classy-nav-container breakpoint-off">
                <nav class="classy-navbar justify-content-between" id="radixNav">
                    <!-- Logo--><router-link class="nav-brand mr-5 text-white" :to="{name: 'Home'}">
                        <img src="/logo.svg" alt="" class="w-12 h-auto">
                    </router-link>
                    <!-- Navbar Toggler-->
                    <div class="classy-navbar-toggler"><span class="navbarToggler"><span></span><span></span><span></span><span></span></span></div>
                    <!-- Menu-->
                    <div class="classy-menu sm:w-full w-auto">
                        <!-- close btn-->
                        <div class="classycloseIcon">
                            <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                        </div>
                        <!-- Nav Start-->
                        <div class="classynav">
                            <ul id="corenav">
                                <li><router-link :to="{ name: 'Home'}" class="custom-links">Home</router-link></li>
                                <li><router-link :to="{ name: 'Schedule'}" class="custom-links">Schedule</router-link></li>
                                <li><router-link :to="{ name: 'Speakers'}" class="custom-links">Speakers</router-link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {

  name: 'NavbarComponent',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
.custom-links {
    color: #ED9221 !important;
    &:hover {
        color: #231e74 !important;
    }
}
.primary-text {
    color: #ED9221;
}
.secondary-text {
    color: #231e74;
}
.primary-color {
    background: #ED9221 !important;
    &:hover {
        background: #231e74 !important;
        color: #fff !important;
    };
}
.secondary-color {
    background: #231e74 !important;
    &:hover {
        background: #ED9221 !important;
        color: #fff !important;
    };
}
</style>
