<template>
  <div id="new-subject">
    <h3>New Subject</h3>
    <div class="row">
      <form @submit.prevent="saveSubject" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="subject.name" required>
            <label>Name: {{subject.name}}</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="subject.phone" required>
            <label>phone : {{subject.phone}}</label>
          </div>
        </div>
        <button type="submit" class="btn blue">Submit</button>
        <router-link to="-1" class="btn grey">Cencel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import { serverBus } from "../app.js";
export default {
  name: "new-subject",
  data() {
    return {
      subject: {
        name: "",
        phone: ""
      }
    };
  },
  methods: {
    saveSubject() {
      fetch("api/subject", {
        method: "post",
        body: JSON.stringify(this.subject),
        headers: {
          "content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          alert("הנחקר נוסף");
          this.$router.push("/dashboard");
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
