<template>
    <div>
        <div>
           <p> Users data - {{ users }}</p>
        </div>
    </div>
</template>

<script>
import db from '@/firebase'
export default {
  data () {
    return {
      users: []
    }
  },
  methods: {
    showUsers () {
      db.collection('users').get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            fullname: doc.data().fullname,
            email: doc.data().email,
            'Tech Stack': doc.data().techstack,
            'Registered Date': doc.data().createdAt.toDate().toString()
          }
          this.users.push(data)
        })
      })
    }
  },
  created () {
    this.showUsers()
    console.log(this.users)
  }
}
</script>

<style lang="scss" scoped>

</style>
