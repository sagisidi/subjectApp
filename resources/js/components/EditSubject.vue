<template>
  <div id="edit-subject">
    <h3>EditSubject</h3>
    <div class="row">
      <form @submit.prevent="updateSubject" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input disabled type="text" v-model="subject.id" required>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="subject.name" required>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="subject.phone" required>
          </div>
        </div>
        <button type="submit" class="btn">Submit</button>
        <router-link to="/dashboard" class="btn gray">Cencel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "edit-subject",
  data() {
    return {
      subject: {
        id: "",
        name: "",
        phone: ""
      },
      subject_id: ""
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
          this.subject.subject_id = res.data.id;
        })
        .catch(err => console.log(err));
    },
    updateSubject() {
      const self = this;

      fetch("api/subject", {
        method: "put",
        body: JSON.stringify(this.subject),
        headers: {
          "content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          alert("Subject Updated");
          this.$router.go(-2);
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
