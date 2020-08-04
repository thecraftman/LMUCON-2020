<template>
    <section class="welcome-area hero2" id="home">
        <!-- Background Shape-->
        <div class="hero-background-shape"><img src="img/core-img/hero-2.png" alt=""></div>
        <!-- Background Animation-->
      <div class="background-animation">
        <div class="star-ani"></div>
        <div class="circle-ani"></div>
        <div class="box-ani"></div>
      </div>
      <!-- Hero Circle-->
      <div class="hero2-big-circle"></div>
        <div class="container h-auto">
            <div class="row h-100 align-items-center md:h-full mt-12 md:mt-4">
                <div class="col-12 col-md-6">
                    <!-- Content-->
                    <div class="welcome-content pr-3">
                        <h2>LMUCON<span class="primary-text ml-2">&nbsp; "20</span></h2>
                        <div class="animated--headline">
                            <vue-typed-js :strings="[' Career Options In Tech,', ' Software Development,', ' Data Science']" :typeSpeed="100">
                              <h4 class="ah-headline">Tech Talks on <span class="typing ah-words-wrapper"></span></h4>
                            </vue-typed-js>
                        </div>
                        <p class="mb-4">Developer Student Clubs, Landmark University presents its first official annual tech event. Opening students to the world of technology.</p>
                        <div class="btn-group-two"><router-link class="btn radix-btn white-btn mr-3 mt-3 secondary-color" :to="{name: 'Speakers'}">Event Speakers</router-link><router-link class="btn radix-btn white-btn mt-3 primary-color" :to="{name: 'Schedule'}">Event Schedule
                        </router-link></div>
                    </div>
                </div>
                <div class="col-12 col-md-6 md:h-full">
                    <div class="card register-card bg-gray p-1 p-sm-4 mb-50 mt-100">
                        <div class="card-body">
                            <h4>Welcome to LMUCON "20</h4>
                            <p>Please fill out this form to save yourself a seat, thanks for participating.</p>
                            <!-- Register Form-->
                            <div class="register-form my-5">
                                <form @submit.prevent="formSubmit">
                                    <div class="form-group">
                                        <input class="form-control rounded-0" @blur="$v.firstname.$touch()" :class="[$v.firstname.$error ? 'is-invalid' : '']" type="text" placeholder="First Name" v-model="firstname">
                                         <div v-if="!$v.firstname.required" class="invalid-feedback">
                                                Your first name is needed for registration
                                        </div>
                                        <div v-if="!$v.firstname.minLength" class="invalid-feedback">
                                            Your name can't be this short...
                                        </div>
                                    </div>
                                     <div class="form-group">
                                        <input class="form-control rounded-0" @blur="$v.lastname.$touch()" :class="[$v.lastname.$error ? 'is-invalid' : '']" type="text" placeholder="Last Name" v-model="lastname">
                                         <div v-if="!$v.lastname.required" class="invalid-feedback">
                                                Your last name is needed for registration
                                        </div>
                                        <div v-if="!$v.lastname.minLength" class="invalid-feedback">
                                            Your name can't be this short...
                                        </div>
                                    </div>
                                      <div class="form-group">
                                        <input class="form-control rounded-0" @blur="$v.email.$touch()" :class="[$v.email.$error ? 'is-invalid' : '']" type="email" placeholder="Email Address"  v-model="email">
                                        <div v-if="!$v.email.required" class="invalid-feedback">
                                                Your email is needed for registration
                                        </div>
                                        <div v-if="!$v.email.email" class="invalid-feedback">
                                                Your email is invalid
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <multiselect v-model="techStack" track-by="name" label="name" placeholder="Development Stack (Optional)" :options="stackOptions" :searchable="true">
                                        </multiselect>
                                    </div>
                                    <button class="btn radix-btn white-btn w-100" type="submit" id="registerBtn" :disabled="loading || $v.$anyError"><i class="lni-unlock mr-2"></i> <span v-if="!loading">Register</span> <span v-else>Loading.....</span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import db from '@/firebase'
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
  name: 'HeropageComponent',

  data () {
    return {
      firstname: '',
      lastname: '',
      email: '',
      techStack: '',
      loading: false,
      users: [],
      stackOptions: [
        { name: 'MEAN(MongoDB, Expressjs, Angular, Nodejs)' },
        { name: 'MERN(MongoDB, Expressjs, Reactjs, Nodejs)' },
        { name: 'MEVN(MongoDB, Expressjs, VueJs, Nodejs)' },
        { name: 'PHP Laravel' },
        { name: 'Python Django' },
        { name: 'Ruby (Ruby on Rails)' },
        { name: 'Microsft .NET & VueJs' },
        { name: 'Microsft .NET & Reactjs' },
        { name: 'Cloud Development' },
        { name: 'Devops' },
        { name: 'Flutter' },
        { name: 'Java & Kotlin' },
        { name: 'Swift' },
        { name: 'React Native' },
        { name: 'UI/UX' }
      ]
    }
  },
  mixins: [validationMixin],
  validations: {
    firstname: { required, minLength: minLength(3) },
    lastname: { required, minLength: minLength(3) },
    email: { required, email }
  },
  firestore () {
    return {
      users: db.collection('users')
    }
  },
  methods: {
    formSubmit () {
      this.loading = true
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$firestore.users.add({
          fullname: this.firstname + ' ' + this.lastname,
          email: this.email,
          techstack: this.techStack.name || null,
          createdAt: new Date()
        }).then(docRef => {
          this.successOperation()
        }).catch(error => {
          if (error.response) {
            this.failedRequest(error)
          } else if (error.request) {
            this.$swal({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              title: 'Server Error',
              text: 'Slow network problem, please check your connection...',
              icon: 'error'
            })
            const as = this
            setTimeout(function () { as.loading = false }, 2500)
          } else if (error) {
            this.$swal({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              title: 'Server Error',
              text: 'Server Error, please try again',
              icon: 'error'
            })
            const as = this
            setTimeout(function () { as.loading = false }, 2500)
          }
        })
      } else {
        this.$swal({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          title: 'Server Error',
          text: 'Sorry please fill out the form correctly',
          icon: 'error'
        })
        const as = this
        setTimeout(function () { as.loading = false }, 2500)
      }
    },
    successOperation () {
      this.$swal({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        title: 'Registered Successfully',
        text: 'You have successfully registered for LMUCON\'20, you will be contacted shortly',
        icon: 'success'
      })
      setTimeout(function () { location.reload() }, 3000)
      this.loading = false
    },
    failedRequest (error) {
      console.log(error)
      this.$swal({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        title: 'Server Error',
        text: 'Server Error, please try again....',
        icon: 'error'
      })
      const as = this
      setTimeout(function () { as.loading = false }, 2500)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
