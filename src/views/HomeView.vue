<template>
  <div class="home">

<div v-if="hatalar">
{{ hatalar }}
</div>
<div v-else-if="makaleler.length">
<MakaleListesi :makaleler="makaleler"></MakaleListesi>
</div>
<div v-else>YÜkleniyor</div>


  </div>
</template>

<script>
import MakaleListesi from '@/components/MakaleListesi';
import makalelerGetir from '../composables/makalelerGetir';
export default {
  name: 'HomeView',
  components: {
    MakaleListesi,
    makalelerGetir
  },
  setup() {
    const { makaleler, hatalar, makaleListesiniYukle } = makalelerGetir();
    console.log(makaleler); 
   makaleListesiniYukle();

   return{makaleler,hatalar}

  }
}
</script>
