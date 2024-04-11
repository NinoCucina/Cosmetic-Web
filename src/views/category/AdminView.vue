<template>
  <v-app>
    <side-bar-admin :drawer="drawer" />
    <div class="admin-content">
      <v-row class="header-row">
        <h3 class="header-title">Danh sách Bài viết</h3>
        <v-spacer></v-spacer>
        <v-btn icon size="large" class="add-btn" @click="dialogAdd = true">
          <v-icon large>mdi-plus</v-icon>
        </v-btn>
      </v-row>
      <v-row>
        <v-col>
<v-card class="data-card text-center">
  <v-table dense striped style="width: 100%;">
    <thead>
  <tr style="background-color: #f5f5f5; color: #333; font-weight: bold;">
    <th style="padding: 12px; text-align: left; border: 1px solid #ccc;">STT</th>
    <th style="padding: 12px; text-align: left; border: 1px solid #ccc;">Id bài viết</th>
    <th style="padding: 12px; text-align: left; border: 1px solid #ccc;">Tên bài viết</th>
    <th style="padding: 12px; text-align: left; border: 1px solid #ccc;">Mô tả bài viết</th>
    <th style="padding: 12px; text-align: left; border: 1px solid #ccc;">Ảnh bài viết</th>
    <th style="padding: 12px; text-align: left; border: 1px solid #ccc;">Chức năng</th>
  </tr>
</thead>
<tbody>
  <template v-for="(item, index) in posts">
    <tr :key="index" class="table-row">
      <td>{{ index + 1 }}</td>
      <td>{{ item.postId }}</td>
      <td>{{ item.postName }}</td>
      <td>{{ item.postTitle }}</td>
      <td>{{ item.image }}</td>

      <td>
        <v-btn color="info" class="mr-2" fab small dark @click="dialogEdit = true, currentItem = item">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn color="error" fab small dark @click="dialogDelete = true, postId = item.postId">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </td>
    </tr>
  </template>
</tbody>
  </v-table>
</v-card>
        </v-col>
      </v-row>
      <add-view
        :dialogAdd = "dialogAdd"
        @close="dialogAdd = false"
        @updateData = "getPost"
      />
      <edit-view
        :dialogEdit = "dialogEdit"
        :currentItem = "currentItem"
        @close="dialogEdit = false"
        @updateData = "getPost"
      />
    <v-dialog max-width="450px" v-model="dialogDelete">
      <v-card>
          <v-alert type="error">
              <v-row align="center">
                  <v-col cols="11" class="text-center">
                      Bạn có đồng ý xóa không
                  </v-col>
              </v-row>
              <v-row align="center">
                  <v-spacer></v-spacer>
                  <v-col cols="5">
                      <v-btn variant="text" @click="deletePost">Đồng ý</v-btn>
                  </v-col>
                  <v-col cols="6">
                      <v-btn variant="text" @click="dialogDelete=false">Hủy bỏ</v-btn>
                  </v-col>
              </v-row>
          </v-alert>
      </v-card>
    </v-dialog>
    </div>
  </v-app>
</template>
  
  
  <script>
  import SideBarAdmin from '../../components/SideBarAdmin.vue';
  import axios from 'axios';
  import AddView from './AddView.vue';
  import EditView from './EditView.vue';
  export default {
  components: { SideBarAdmin, AddView, EditView },
  name:'adminView',
  data(){
          return{
              posts:[],
              dialogAdd: false,
              dialogEdit: false,
              currentItem: '',
              dialogDelete: false,
              postId:'',
        }
    },
    methods:{
        getPost(){
            axios.get('https://localhost:7113/api/Post')// ('Link api tren swagger')
            .then(response =>{
                this.posts = response.data;
            })
            .catch(error=>{
                console.log(error);
            })
        },
        deletePost(){
            axios.delete('https://localhost:7113/api/Post' +'/'+ this.postId)
            .then(response =>{
                var newArr = this.posts.filter(x => x.postId !=this.postId);
                this.posts = newArr;
                this.dialogDelete = false;
                console.log(response.status)
            })
            .catch(error=>{
                console.log(error);
            }) 
            
        }
    },
    created(){
        this.getPost();
    },
    
};
  </script>
  
  <style scoped>
.admin-content {
  padding: 20px;
}

.header-row {
  align-items: center;
  padding: 10px;
  background-color: black;
  border-radius: 8px;
  margin-bottom: 20px;
}

.header-title {
  margin-left: 10px;
  color: #f6d365;
  font-weight: bold;
  align-items: center;
}

.add-btn {
  background-color: #f6d365;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.data-card {
  overflow-x: auto;
}

.v-table {
  background-color: #1e1e1e;
  color: white;
  border-radius: 4px;
}

.v-table thead th {
  background-color: #f6d365;
  color: #2d2d2d;
  font-weight: bold;
}

.v-table tbody tr:hover {
  background-color: #424242;
}

.v-btn {
  margin: 0 4px;
}

.v-btn .mdi-icon {
  color: white;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .header-row, .data-card {
    padding: 5px;
  }

  .header-title, .v-table th, .v-table td {
    font-size: 14px;
  }

  .v-btn {
    min-width: 30px;
    padding: 4px;
  }

  .v-icon {
    font-size: 18px;
  }
}
</style>
  