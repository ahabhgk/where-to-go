<template>
  <div>
    <CityHeader />
    <CitySearch />
    <CityList :hotCities="hotCities" :cities="cities" :letter="letter" />
    <CityAlphabet :cities="cities" @listJump="handleListJump" />
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from '@/components/CityHeader.vue'
import CitySearch from '@/components/Search.vue'
import CityList from '@/components/List.vue'
import CityAlphabet from '@/components/Alphabet.vue'

export default {
  name: 'City',

  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },

  data() {
    return {
      hotCities: [],
      cities: {},
      letter: '',
    }
  },

  methods: {
    async getCityData() {
      try {
        const res = await axios.get('/api/city.json')
        const data = res.data.data
        
        this.hotCities = data.hotCities
        this.cities = data.cities
      } catch (err) {
        console.log(err)
      }
    },

    handleListJump(letter) {
      this.letter = letter
    }
  },

  mounted() {
    this.getCityData()
  },
}
</script>

<style lang="scss" scoped>

</style>
