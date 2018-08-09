<template lang="html">
  <div class="container col-9 text-left">
    <div class="row">
      <div class="col-6">
        <div class="form-group row">
          <img src="../assets/img/pike.png" alt="" width="50" height="50" id="pike">
          <div class="col-sm-3">
            <input type="number"
                   class="form-control"
                   :class="{ 'is-invalid': $v.pikesNumber.$error }"
                   v-model.number="pikesNumber"
                   @blur="setPikesNumber">
          </div>
          <small class="text-danger" v-if="!$v.pikesNumber.numeric">Pikes quantity should be a number</small>
          <small class="text-danger" v-if="!$v.pikesNumber.required">Pikes quantity should be present</small>
        </div>
        <div class="form-group row">
          <img src="../assets/img/crucian.png" alt="" width="50" height="50" id="crucian">
          <div class="col-sm-3">
            <input type="number"
                   class="form-control"
                   :class="{ 'is-invalid': $v.cruciansNumber.$error }"
                   v-model.number="cruciansNumber"
                   @blur="setCruciansNumber">
          </div>
          <small class="text-danger" v-if="!$v.cruciansNumber.numeric">Crucians quantity should be a number</small>
          <small class="text-danger" v-if="!$v.cruciansNumber.required">Crucians quantity should be present</small>
        </div>
        <div class="form-group row">
          <img src="../assets/img/seaweed.png" alt="" width="50" height="50" id="seaweed">
          <div class="col-sm-3">
            <input type="number"
                   class="form-control"
                   :class="{ 'is-invalid': $v.seaweedsNumber.$error }"
                   v-model="seaweedsNumber"
                   @blur="setSeaweedsNumber">
          </div>
          <small class="text-danger" v-if="!$v.seaweedsNumber.numeric">Seaweeds quantity should be a number</small>
          <small class="text-danger" v-if="!$v.seaweedsNumber.required">Seaweeds quantity should be present</small>
        </div>
      </div>
      <div class="col-6">
        <div class="form-group row">
          <label class="col-sm-5 col-form-label">Aquarium height (20 cells max)</label>
          <div class="col-sm-5">
            <input type="number"
                   class="form-control"
                   :class="{ 'is-invalid': $v.aquariumHeight.$error }"
                   v-model.number="aquariumHeight"
                   @blur="setAquariumHeight">
          </div>
          <small class="text-danger"
                 v-if="!$v.aquariumHeight.numeric">Height should be a number</small>
          <small class="text-danger"
                 v-if="!$v.aquariumHeight.minVal">
            Height should be {{ $v.aquariumHeight.$params.minVal }} cells min
          </small>
          <small class="text-danger"
                 v-if="!$v.aquariumHeight.maxVal">
            Height should be {{ $v.aquariumHeight.$params.maxVal }} cells max
          </small>
        </div>
        <div class="form-group row">
          <label class="col-sm-5 col-form-label">Aquarium width (20 cells max)</label>
          <div class="col-sm-5">
            <input type="number"
                   class="form-control"
                   :class="{ 'is-invalid': $v.aquariumWidth.$error }"
                   v-model.number="aquariumWidth"
                   @blur="setAquariumWidth">
          </div>
          <small class="text-danger"
                 v-if="!$v.aquariumWidth.numeric">Width should be a number</small>
          <small class="text-danger"
                 v-if="!$v.aquariumWidth.minVal">Width should be {{ $v.aquariumWidth.$params.minVal }} cells min</small>
          <small class="text-danger"
                 v-if="!$v.aquariumWidth.maxVal">Width should be {{ $v.aquariumWidth.$params.maxVal }} cells max</small>
        </div>
        <div class="form-group row">
          <label class="col-sm-5 col-form-label">Set Interval (ms)</label>
          <div class="col-sm-5">
            <input type="number"
                   class="form-control"
                   :class="{ 'is-invalid': $v.interval.$error }"
                   v-model.number="interval"
                   @blur="setInterval">
          </div>
          <small class="text-danger"
                 v-if="!$v.interval.minVal">Interval should be {{ $v.interval.$params.minVal }}ms min</small>
          <small class="text-danger"
                 v-if="!$v.interval.maxVal">Interval should be {{ $v.interval.$params.maxVal }}ms max</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, numeric, minValue, maxValue } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      pikesNumber: 3,
      cruciansNumber: 3,
      seaweedsNumber: 0,
      aquariumHeight: 10,
      aquariumWidth: 10,
      interval: 300,
    };
  },
  validations: {
    pikesNumber: {
      numeric,
      required,
      maxVal: maxValue(10),
      minVal: minValue(0),
    },
    cruciansNumber: {
      numeric,
      required,
      maxVal: maxValue(10),
      minVal: minValue(1),
    },
    seaweedsNumber: {
      numeric,
      required,
      maxVal: maxValue(15),
    },
    aquariumHeight: {
      numeric,
      minVal: minValue(4),
      maxVal: maxValue(20),
    },
    aquariumWidth: {
      numeric,
      minVal: minValue(4),
      maxVal: maxValue(20),
    },
    interval: {
      minVal: minValue(50),
      maxVal: maxValue(5000),
    },
  },
  methods: {
    setPikesNumber() {
      this.$v.pikesNumber.$touch();
      this.checkSettings();
    },
    setCruciansNumber() {
      this.$v.cruciansNumber.$touch();
      this.checkSettings();
    },
    setSeaweedsNumber() {
      this.$v.seaweedsNumber.$touch();
      this.checkSettings();
    },
    setAquariumHeight() {
      this.$v.aquariumHeight.$touch();
      this.checkSettings();
    },
    setAquariumWidth() {
      this.$v.aquariumWidth.$touch();
      this.checkSettings();
    },
    setInterval() {
      this.$v.interval.$touch();
      this.checkSettings();
    },
    checkSettings() {
      if (this.$v.$invalid) {
        this.$store.commit('invalidSettings');
      } else {
        this.$store.commit('validSettings');
      }
    },
  },
};
</script>

<style lang="css">
</style>
