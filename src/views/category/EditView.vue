<template>
    <div>
        <v-dialog v-model="dialog"
         max-width="640px">
            <v-card>
                <v-card-tittle>
                    <span>Cập nhật bài viết</span>
                </v-card-tittle>
                <v-card-text>
                    <v-form>
                        <v-container>
                            <v-row>
                                <v-col>
                                    <v-text-field
                                    label="Tên bài viết"
                                    v-model="data.postName"
                                    ></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field
                                    label="Mô tả bài viết"
                                    v-model="data.postTitle"
                                    ></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field
                                    label="Anh bài viết"
                                    v-model="data.image"
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
                    @click="updatePost">Cập nhật</v-btn>
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
                  postId:'',
                  postName:'',
                  postTitle:'',
                  image:''
              }
          }
      },
      methods:{
          updatePost(){
            axios.put('https://localhost:7113/api/Post'+'/' + this.data.postId, this.data)
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
              this.data.postId = this.currentItem.postId;
              this.data.postName = this.currentItem.postName;
              this.data.postTitle = this.currentItem.postTitle;
              this.data.image = this.currentItem.image;
          }
      }
  }
  </script>
  
  <style>
  
  </style>