<template>
  <div id="dashboard">
    <div class="container">
      <v-card>
        <v-card-title>Subjects
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :search="search"
          :headers="headers"
          :items="subjects"
          :loading="!isLoaded()"
          class="elevation-3"
        >
          <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
          <template v-if="isLoaded()" slot="items" slot-scope="props">
            <tr @click="props.expanded = !props.expanded">
              <td class="text-xs-left">
                <router-link v-bind:to="{name:'view-subject',params:{subject_id:props.item.id}}">
                  <v-chip>{{props.item.id}}</v-chip>
                </router-link>
              </td>
              <td class="text-xs-left">{{props.item.name}}</td>
              <td class="text-xs-left"></td>
              <td class="text-xs-center">
                <v-flex xs12 sm3>
                  <v-btn @click="deleteSubject(props.item.id)" fab small>
                    <i class="fa fa-minus"></i>
                  </v-btn>
                </v-flex>
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-card>
    </div>
    <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>
<script>
import { serverBus } from "../app";
export default {
  name: "dashboard",
  data() {
    return {
      subject: {
        id: "",
        name: "",
        phone: ""
      },
      subjects: [],
      search: "",
      headers: [
        {
          text: "Subject Id",
          align: "left",

          value: "id"
        },
        { text: "Subject Name", value: "name" },
        { text: "Subject Data", value: "data" },
        { text: "Delete", value: "Delete" }
      ]
    };
  },
  methods: {
    fatchSubjects() {
      fetch("api/subjects")
        .then(res => res.json())
        .then(res => {
          this.subjects = res.data;
        })
        .catch(err => console.log(err));
    },
    deleteSubject(id) {
      if (confirm("אתה בטוח שאתה רוצה למחוק?")) {
        fetch(`api/subject/${id}`, {
          method: "delete"
        })
          .then(res => res.json())
          .then(data => {
            alert("הנחקר נמחק");
            this.fatchSubjects();
          })
          .catch(err => console.log(err));
      }
    },
    isLoaded() {
      if (this.subjects) {
        return true;
      }
      return false;
    }
  },
  created() {
    this.fatchSubjects();
    this.isLoaded();
    // db.collection("subjects")
    //   .orderBy("subject_id", "asc")
    //   .get()
    //   .then(querySnapshot => {
    //     querySnapshot.forEach(doc => {
    //       const data = {
    //         subjectId:this.subjects.length,
    //         id: doc.id,
    //         subject_id: doc.data().subject_id,
    //         subject_name: doc.data().name,
    //         phone: doc.data().phone,
    //         subject_data: doc.data().subject_data,

    //       };
    //       this.subjects.push(data);

    //     }

    //     );
    //   });
  }
};
</script>
