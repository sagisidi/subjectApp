<template>
  <div id="view-subject">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>{{subject.name}}</h4>
      </li>
      <li class="collection-item">ID:# {{subject.id}}</li>
      <li class="collection-item">Phone: {{subject.phone}}</li>
    </ul>
    <router-link to="/dashboard" class="btn grey">Back</router-link>
    <button @click="deleteSubject" class="btn red">Delete</button>

    <div class="fixed-action-btn">
      <router-link v-bind:to="{ name: 'edit-subject'}" class="btn-floating btn-large red">
        <i class="fa fa-pencil"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "view-subject",
  data() {
    return {
      subject: {
        id: "",
        name: "",
        phone: ""
      },

      subject_data: null
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch(`api/subject/${this.$route.params.subject_id}`, {
        method: "get"
      })
        .then(res => res.json())
        .then(res => {
          console.log(this.$route.params.subject_id);
          this.subject = res.data;
        })
        .catch(err => console.log(err));
    },
    deleteSubject() {
      if (confirm("אתה בטוח שאתה רוצה למחוק?")) {
        fetch(`api/subject/${this.subject.id}`, {
          method: "delete"
        })
          .then(res => res.json())
          .then(data => {
            this.$router.push("/");
          })
          .catch(err => console.log(err));
      }
    }
  }
};
</script>
