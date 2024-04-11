<template>
    <div>
        <v-dialog v-model="dialog"
         max-width="640px">
            <v-card>
                <v-card-tittle>
                    <span>Cập nhật nội dung bài viết</span>
                </v-card-tittle>
                <v-card-text>
                    <v-form>
                        <v-container>
                            <v-row>
                                <v-col>
                                    <v-text-field
                                    label="Tên nội dung bài viết"
                                    v-model="data.detailName"
                                    ></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field
                                    label="Nội dung bài viết"
                                    v-model="data.detailTittle"
                                    ></v-text-field>
                                </v-col>
                                
                            </v-row>
                        </v-container>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        class="mr-2" 
                        @click="$emit('close')"
                    >Hủy</v-btn>
                    <v-btn
                    color="primary"
                    @click="updateDetail">Cập nhật</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
      </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
      name:'EditView',
      data(){
          return{
              data:{
                detailId:'',
                detailName:'',
                detailTittle:'',
              }
          }
      },
      methods:{
          updateDetail(){
            axios.put('https://localhost:7113/api/Detail'+'/' + this.data.detailId, this.data)
              .then(response=>{
                  this.$emit('close');
                  this.$emit('updateData')
                  console.log(response.status);
              })
              .catch(error =>{
                  console.log(error);
              })
          }
      },
      props: [`dialogEdit`,'currentItem'],
        computed:{
            dialog:{
                get(){
                return this.dialogEdit;
            },
            set(value){
                if(!value){
                    this.$emit(`close`);
                }
            }
          }
      },
      watch:{
          currentItem:function(){
              this.data.detailId = this.currentItem.detailId;
              this.data.detailName = this.currentItem.detailName;
              this.data.detailTittle = this.currentItem.detailTittle;
          }
      }
  }
  </script>
  
  <style>
  
  </style>