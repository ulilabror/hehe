export default {
    props: {
      package: Object
    },
    data() {
      return {
        pickedlist: false
      };
    },
    template: `
    <label class="form-check-label">
    <input
      type="radio"
      name="type"
      :value="package.pkg"
      v-model="pickedlist"
      @click="$emit('pickedlist', package.pkg)"
      class="form-check-input"
    />
    {{ package.pkg }}
  </label>
    `
  };
  