<template>
  <div class="pagination-wrapper">
    <nav aria-label="...">
      <ul class="pagination pagination-md justify-content-center">
        <li class="page-item" v-for="pg_no in paginationOptions.totalPages" :key="pg_no">
          <a class="page-link" tabindex="-1" @click="$emit('pageClick', pg_no)">{{pg_no}}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    paginationOptions: {
      type: Object,
      required: true
    }
  },
  mounted () {
    console.log(this.paginationOptions)
  }
}
</script>

<style>
.page-link {
  background-color: #243B55;
  color: white;
}
.pagination {
  margin-top: 20px;
}
</style>
