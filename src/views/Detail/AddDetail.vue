<template>
    <div>
      <v-dialog
          v-model="dialog"
          max-width="650px"
      >
          <v-card>
              <v-card-title>
                  <span>Thêm mới nội dung bài viết</span>
              </v-card-title>
          <v-card-text>
              <v-form>
                  <v-container>
                      <v-row>
                          <v-col>
                              <v-text-field
                                  label="Tên Nội dung bài viết"
                                  v-model="data.detailName"
                              >
                              </v-text-field>
                              <v-text-field
                                  label="Nội dung bài viết"
                                  v-model="data.detailTittle"
                              >
                              </v-text-field>
                          </v-col>
                      </v-row>
                  </v-container>
              </v-form>
          </v-card-text>
          <v-card-actions>
              <v-space></v-space>
              <v-btn class="mr-2" color="grey" @click="$emit('close')">Hủy</v-btn>
              <v-btn class="mr-2" color="blue" @click="addDetail">Lưu</v-btn>
          </v-card-actions>
          </v-card>
      </v-dialog>
    </div>
  </template>
  
<script>
import axios from 'axios';
export default {
    name: 'AddViewDetail',
    data(){
        return{
            data:{
                detailName: '',
                detailTittle:'',
            }
        }
    },
    methods:{
        addDetail(){
            axios.post("https://localhost:7113/api/Detail", this.data)
            .then(response =>{
                this.$emit('close');
                this.$emit('updateData');
                console.log(response.status);
            })
            .catch(error =>{
                console.log(error);     
            })
        }
    },
    props: ['dialogAdd'],
    computed:{
        dialog:{
            get(){
            return this.dialogAdd;
        },
            set(value) {
                if(!value) {
                    this.$emit('close');
                }
            }
        }
    }
}
</script>
  
<style>
  
</style>
