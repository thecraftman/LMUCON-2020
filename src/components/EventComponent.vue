<template>
  <div>
    <!-- Breadcrumb Area-->
    <div class="breadcrumb--area bg-img bg-overlay jarallax" style="background-image: url('/img/event/team-1.JPG');">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12">
            <div class="breadcrumb-content">
              <h2 class="breadcrumb-title">Event Schedule</h2>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center">
                  <li class="breadcrumb-item">
                    <router-link :to="{name: 'Home'}">Home</router-link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    <router-link :to="{name: 'Schedule'}">Schedule</router-link>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="radix-tab-area section-padding-120">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-9 col-lg-6">
            <div class="section-heading text-center"><i class="lni-crown"></i>
              <h2> Event Schedule </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="tab--area">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item"><a class="nav-link active" id="tab--1" data-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">DAY 1</a></li>
                <li class="nav-item"><a class="nav-link" id="tab--2" data-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">DAY 2</a></li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <!-- Tab Pane-->
                <div class="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab--1">
                  <div class="row justify-content-between items-start">
                    <div class="col-12 col-md-6">
                      <div class="tab--text mt-5">
                        <h6>Venue & Time</h6>
                        <h2>Date: <span class="text-2xl">Friday September 4th, 2020</span></h2>
                        <h2 class="">Venue: <span class="text-xl">Airmeet Virtual Platform</span></h2>
                        <h2 class="">Time: <span class="text-xl">11:00 AM</span></h2>
                        <p class="font-semibold text-blue-800">Meet and Greet (Ask questions about DevOps, Terraform, and Ansible) - <span class="text-gray-600 font-normal">Oloruntola Ore-Aruwaji, Cloud DevOps Engineer (11:25 AM - 12:05 PM)</span></p>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="mt-5">
                        <p class="font-semibold text-blue-800">Keynote (Learn, Build and Hit the Career Space) - <span class="text-gray-600 font-normal">Tosin ‘BOT’ Adeniyi, Senior Software Engineer, Andela (12:12 PM - 12:32 PM)</span></p>
                        <p class="font-semibold text-blue-800">Advances in android development - <span class="text-gray-600 font-normal">Samuel Agbede, Software Engineer, JPMorgan Chase & Co. (12:32 PM - 12:47 PM)</span></p>
                        <p>Tea Break/ Networking - 12:47 PM - 12:54 PM</p>
                        <p class="font-semibold text-blue-800">Building Systems that Hear and Understand People - <span class="text-gray-600 font-normal">Desh Raj, Ph.D. Researcher, John Hopkins University (12:54 PM - 1:09 PM)</span></p>
                        <p class="font-semibold text-blue-800">A great UI/UX Designer Skillset - <span class="text-gray-600 font-normal">Arkadiusz Radek, Product Design Lead, Ework Group (1:09 PM - 1:24 PM)</span></p>
                        <p class="font-semibold text-blue-800">Workshop: Getting Into The International Software Industry? <span class="text-gray-600 font-normal">(Jessica Esset - Software Engineer, Goldman Sachs) - 1:24 PM - 1:39 PM</span></p>
                        <p class="font-semibold text-blue-800">Q/A - 1:39 PM - 1:50 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Tab Pane-->
                <div class="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab--2">
                  <div class="row justify-content-between items-start">
                    <div class="col-12 col-md-6">
                      <div class="mt-5">
                        <p class="font-semibold text-orange-500">Welcome Speech - 12:00 PM - 12:05 PM</p>
                        <p class="font-semibold text-orange-500">First Speech (“Software Developer” Career : Nigerian Version) - <span class="text-gray-600 font-normal">Oluwatoni Akinmolayan, Software Engineer, Truthware Solutions (12:05 PM - 12:20 PM)</span></p>
                        <p class="font-semibold text-orange-500">Second Speech (APIs as Agents of Social Change) - <span class="text-gray-600 font-normal">Ayoola Oluwanusin, Management Specialist, Google Cloud (12:20 PM - 12:35 PM)</span></p>
                        <p class="font-semibold text-orange-500">Break/ Networking - 12:35 PM - 12:42 PM</p>
                        <p class="font-semibold text-orange-500">Third Speech (Introduction to Cloud Computing) - <span class="text-gray-600 font-normal">Sumeet Ranka, Associate Researcher, Huawei Toronto (12:42 PM - 12:57 PM)</span></p>
                        <p class="font-semibold text-orange-500">Fourth Speech (Introduction to Site-Reliability-Engineering) - <span class="text-gray-600 font-normal">Siddharth Kumar, Associate, Goldman Sachs (12:57 PM - 1:12 PM)</span></p>
                        <p class="font-semibold text-orange-500">Round Table discussion with Members of Developer Students Club - LMU (Shuaibu Fauzeeya and Michael Kalango) - 1:12 PM - 1:32 PM</p>
                        <p class="font-semibold text-orange-500">Workshop: Resume and Job Landing (Remote & On-site) - <span class="text-gray-600 font-normal">Oloruntola Ore-Aruwaji, Cloud DevOps Engineer & Thomas Lewis, Spatial Computing Cloud Advocate, Microsoft (1:32 PM - 1:47 PM)</span></p>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="tab--text mt-5">
                        <h6>Venue & Time</h6>
                        <h2>Date: <span class="text-2xl">Saturday September 5th, 2020</span></h2>
                        <h2 class="">Venue: <span class="text-xl">Airmeet Virtual Platform</span></h2>
                        <p>Event programme in progress...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EventscheduleComponent',

  data () {
    return {

    }
  }
}

</script>
<style lang="css" scoped>
</style>

